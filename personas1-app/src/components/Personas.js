import React, { Component } from "react";

import { personas } from "../data/personas.json";
import logo from "../logo.svg";

//
import PersonaForm from "./PersonaForm";

import "./Personas.css";

class Personas extends Component {
  //personasJson = personas;

  //
  personasOr = [];

  constructor(props) {
    super(props);
    this.state = {
      personas: personas,
    };
    //
    this.handleAddPersona = this.handleAddPersona.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  removePersona(index) {
    this.setState({
      personas: this.state.personas.filter((e, i) => {
        return i !== index;
      }),
    });

    this.personasOr = this.state.personas;
  }

  handleAddPersona(persona) {
    this.setState({
      personas: [...this.state.personas, persona],
    });

    this.personasOr = this.state.personas;
  }

  handleSearch(value) {
    console.log("valor del handle search de app.js", value);
    if (value !== undefined && value !== null && value !== "") {
      if (this.personasOr.length === 0) {
        this.personasOr = this.state.personas;
      }
      this.setState({
        personas: this.personasOr.filter((p) => p.matricula === value),
      });
    } else {
      if (this.personasOr.length > 0) {
        this.setState({
          personas: this.personasOr,
        });
      }

      console.log("state.personas", this.state.personas);
    }
  }

  render() {
    //cambie _personas por personas
    const personas = this.state.personas.map((persona, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <table>
              <tr>
                <th>Matrícula:</th>
                <td>
                  <span className="badge badge-pill badge-danger ml-2">
                    {persona.matricula}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Nombre:</th>
                <td>{persona.nombre}</td>
              </tr>
              <tr>
                <th>Fecha de Nacimiento:</th>
                <td>{persona.fechanacimiento}</td>
              </tr>
            </table>

            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removePersona.bind(this, i)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="personas">
        <div className="text-center">
          <h1>Lista de Personas</h1>
        </div>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <PersonaForm
                onAddPersona={this.handleAddPersona}
                onSearchPersona={this.handleSearch}
              ></PersonaForm>
            </div>

            <div className="col-md-8">
              <div className="row">{personas}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Personas;
