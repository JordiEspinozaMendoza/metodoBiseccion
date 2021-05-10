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
        numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "x", " "]
        xi = data["xi"]
        xu = data["xu"]
        stop = float(data["stop"])
        equation = data["equation"]

        for i in (x for x in numbers if x in equation):
            A = f"{i}sin"
            if A in equation:
                equation = equation.replace(A, f"{i}*sin")
        for i in (x for x in numbers if x in equation):
            A = f"{i}cos"
            if A in equation:
                equation = equation.replace(A, f"{i}*cos")
        for i in (x for x in numbers if x in equation):
            A = f"{i}tan"
            if A in equation:
                equation = equation.replace(A, f"{i}*tan")
        for i in (x for x in numbers if x in equation):
            A = f"{i}e"
            if A in equation:
                equation = equation.replace(A, f"{i}*e")

        if "sin" in equation:
            equation = equation.replace("sin", "math.sin")
        if "cos" in equation:
            equation = equation.replace("cos", "math.cos")
        if "tan" in equation:
            equation = equation.replace("tan", "math.tan")
        if "x" in equation:
            equation = equation.replace("x", "*x")

        if "x^2" in equation:
            equation = equation.replace("x^2", "(x*x)")
        if "x^3" in equation:
            equation = equation.replace("x^3", "(x*x*x)")
        if "x^4" in equation:
            equation = equation.replace("x^4", "(x*x*x*x)")
        if "^*x" in equation:
            equation = equation.replace("^*x", "^x")
        if "e^x" in equation:
            equation = equation.replace("e^x", "math.pow(math.e, x)")
        if "math.sin(*x)" in equation:
            equation = equation.replace("math.sin(*x)", "math.sin(x)")
        if "math.cos(*x)" in equation:
            equation = equation.replace("math.cos(*x)", "math.cos(x)")
        if "math.tan(*x)" in equation:
            equation = equation.replace("math.tan(*x)", "math.tan(x)")
        if "/*x" in equation:
            equation = equation.replace("/*x", "/x")
        print(equation)

        check = False

        for i in (x for x in numbers if x in equation):
            A = f"{i}*(x*x)"
            print(A)
            if A in equation and check == False:
                check = True
        if not check:
            equation = equation.replace("*(x*x)", "(x*x)")
            equation = equation.replace("/*(x*x)", "(x*x)")

        check = False

        for i in (x for x in numbers if x in equation):
            A = f"{i}*(x*x*x)"
            if A in equation:
                check = True
        if not check:
            equation = equation.replace("*(x*x*x)", "(x*x*x)")
            equation = equation.replace("/*(x*x*x)", "(x*x*x)")

        print(equation)

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
        message = {
            'detail': 'Lo siento, aún no estoy programado para resolver esa formula, intenta reescribir la ecuación :('}

        return Response(message, status=status.HTTP_400_BAD_REQUEST)
