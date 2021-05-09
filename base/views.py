from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

import pandas as pd
import math
import sys
import os

# Create your views here.
@api_view(["POST"])
def getResults(request):
    try:
        data = request.data

        xi = data["xi"]
        xu = data["xu"]
        stop = float(data["stop"])
        if "sin" in data["equation"]:
            equation = data["equation"].replace("sin", "math.sin")
        if "cos" in data["equation"]:
            equation = data["equation"].replace("cos", "math.cos")
        if "tan" in data["equation"]:
            equation = data["equation"].replace("tan", "math.tan")
        if "x" in data["equation"]:
            equation = data["equation"].replace("x", "*x")
        if "x^2" in equation:
            equation = equation.replace("x^2", "(x*x)")
        if "x^3" in equation:
            equation = equation.replace("x^3", "(x*x*x)")
        if "x^4" in equation:
            equation = equation.replace("x^4", "(x*x*x*x)")

        templateFinal = []
        counter = 1
        xrPost = 0
        ea = 100.00
        while abs(ea) > stop:
            template = {
                "Iteration": [],
                "xi": [],
                "xu": [],
                "fxi": [],
                "xr": [],
                "fxr": [],
                "Ea": [],
                "Signo": [],
                "fx": [],
            }
            try:
                template["Iteration"].append(counter)
                template["xi"].append(xi)

                template["xu"].append(xu)

                fxiEquation = equation.replace("x", f"({xi})")
                fxi = eval(str(fxiEquation))
                template["fxi"].append(fxi)

                fxEquation = equation.replace("x", f"({counter})")
                fx = eval(str(fxEquation))
                template["fx"].append(fx)

                xr = (float(xi) + float(xu)) / 2.0
                template["xr"].append(xr)

                fxrEquation = equation.replace("x", f"({xr})")
                fxr = eval(fxrEquation)

                template["fxr"].append(fxr)

                if counter == 1:
                    template["Ea"].append("---")
                else:
                    ea = ((xr - xrPost) / xr)*100
                    template["Ea"].append(f"{str(abs(ea))}")
                sign = fxi * fxr
                if sign < 0:
                    template["Signo"].append("-")
                else:
                    template["Signo"].append("+")

                xrPost = xr
                if sign < 0:
                    xu = xr
                else:
                    xi = xr
                templateFinal.append(template)

            except Exception as e:
                exc_type, exc_obj, exc_tb = sys.exc_info()
                fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
                print(exc_type, fname, exc_tb.tb_lineno)
                stop = 101
            counter = counter + 1

        return Response({"data": templateFinal,
                         "message":    f"La tolerancia ha sido satisfacida en la iteración {str(counter-1)[0:6]} con un valor de xr = {str(xr)[0:6]} y un error del {str(ea)[0:6]}%"
                         })

    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        message = {'detail': 'Lo siento, no puedo resolver esa formula, intenta reescribir la ecuación  '}

        return Response(message, status=status.HTTP_400_BAD_REQUEST)
