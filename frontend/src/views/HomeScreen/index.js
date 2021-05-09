import {
  Equation,
  EquationEvaluate,
  EquationOptions,
  defaultErrorHandler,
} from "react-equation";
import { defaultVariables, defaultFunctions } from "equation-resolver";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Table,
} from "react-bootstrap";
import React, { useEffect, useState, useRef } from "react";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import "./styles.css";
import axios from "axios";
import Graph from "../../components/graph";

var data = [];

export default function HomeScreen() {
  const [equation, setEquation] = useState("f(x)=-0.5x^2 + 2.5x +4.5 ");
  const [xi, setXi] = useState(5);
  const [xu, setXu] = useState(10);
  const [stop, setStop] = useState(0.1);
  const [loading, setIsLoading] = useState(false);
  const [results, setResults] = useState();
  const [resultMessage, setResultMessage] = useState();
  const refResults = React.createRef();
  const [errorMessage, setErrorMessage] = useState();

  const scrollTo = (ref) => {
    if (ref /* + other conditions */) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    data = [];
    setResults();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/solve/",
        {
          equation: equation.replace("f(x)=", ""),
          xi: xi,
          xu: xu,
          stop: stop,
        },
        config
      );
      setIsLoading(false);
      setResults(data.data);
      setResultMessage(data.message);
      setErrorMessage();
    } catch (error) {
      if (error.response.status == 400) {
        setErrorMessage(error.response.data.detail);
      }
      setIsLoading(false);
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <Navbar fixed className="navbar-dark bg-primary" bg="primary" expand="lg">
        <div className="container-fluid">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://res.cloudinary.com/jordiespinoza/image/upload/v1620503223/math_1_i2icnq.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Metodo de bisección
          </Navbar.Brand>
        </div>
      </Navbar>
      <Container style={{ marginTop: "10vh" }}>
        <main>
          <Row
            className="justify-content-md-center"
            style={{ width: "100%", margin: "0" }}
          >
            <Col xs={12} md={6}>
              <h3>Metodo de bisección</h3>

              <Form onSubmit={submitHandler}>
                <Form.Group controlId="equation" className="mb-4">
                  <Form.Label>Inserta la ecuación</Form.Label>
                  <Form.Control
                    className="mb-4"
                    type="text"
                    placeholder="La ecuación"
                    value={!equation.startsWith("f(x)=") ? "f(x)=" : equation}
                    onChange={(e) => {
                      setEquation(e.target.value);
                    }}
                    required
                  ></Form.Control>{" "}
                  <div>
                    <Equation
                      value={`${
                        !equation.startsWith("f(x)=") ? "f(x)=" : equation
                      }`}
                      errorHandler={defaultErrorHandler}
                    />
                  </div>
                </Form.Group>
                <Form.Group controlId="xi">
                  <Form.Label>Inserta el valor de xi</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="xi"
                    value={xi}
                    onChange={(e) => {
                      setXi(e.target.value);
                    }}
                    required
                  ></Form.Control>{" "}
                </Form.Group>
                <Form.Group controlId="xu">
                  <Form.Label>Inserta el valor de xu</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="xi"
                    value={xu}
                    onChange={(e) => {
                      setXu(e.target.value);
                    }}
                    required
                  ></Form.Control>{" "}
                </Form.Group>
                <Form.Group controlId="stop">
                  <Form.Label>Inserta el criterio de parada</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="xi"
                    value={stop}
                    onChange={(e) => {
                      setStop(e.target.value);
                    }}
                    required
                  ></Form.Control>{" "}
                </Form.Group>
                <div className="mb-4"></div>
                <Button type="submit" variant="primary">
                  Calcular
                </Button>
              </Form>
            </Col>
          </Row>
        </main>
        {errorMessage && (
          <Row className="justify-content-md-center mt-4">
            <Col xs={12} md={6}>
              <Message variant="danger">{errorMessage}</Message>
            </Col>
          </Row>
        )}
        {loading ? (
          <Loader />
        ) : (
          results && (
            <>
              <h5 ref={scrollTo} className="text-center p-5">
                {resultMessage}
              </h5>
              <Row
                className="justify-content-center"
                style={{ overflowX: "scroll" }}
              >
                <Graph data={data} />
              </Row>
              <Table
                striped
                bordered
                hover
                responsive
                className="table-sm mt-3"
              >
                <thead>
                  <tr>
                    <th>Iteración</th>
                    <th>xi</th>
                    <th>xu</th>
                    <th>f(xi)</th>
                    <th>xr</th>
                    <th>f(xr)</th>
                    <th>Ea</th>
                    <th>Signo</th>
                  </tr>
                </thead>
                <tbody>
                  {results?.map((result) => (
                    <tr key={result[0]}>
                      <td>{result.Iteration[0]}</td>
                      <td>{String(result.xi[0]).substring(0, 6)}</td>
                      <td>{String(result.xu[0]).substring(0, 6)}</td>
                      <td>{String(result.fxi[0]).substring(0, 6)}</td>
                      <td>{String(result.xr[0]).substring(0, 6)}</td>
                      <td>{String(result.fxr[0]).substring(0, 6)}</td>
                      <td>
                        {result.Ea[0] != "---"
                          ? String(result.Ea[0]).substring(0, 6) + "%"
                          : "---"}
                      </td>
                      <td>{result.Signo[0]}</td>
                    </tr>
                  ))}
                  {results?.map((result) => {
                    if (
                      results[results.length - 1].Iteration[0] > data.length
                    ) {
                      data.push({
                        name: "Fxi",
                        fxi: result.fxi[0],
                        fxr: result.fxr[0],
                        fx: result.fx[0],
                      });
                    }
                  })}
                </tbody>
              </Table>
            </>
          )
        )}
      </Container>
    </>
  );
}
