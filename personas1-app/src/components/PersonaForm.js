import React, { Component } from "react";

class PersonaForm extends Component {
  constructor() {
    super();
    this.state = {
      matricula: "",
      nombre: "",
      fechanacimiento: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddPersona(this.state);
    this.setState({
      matricula: "",
      nombre: "",
      fechanacimiento: "",
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  }

  handleSearch(e) {
    e.preventDefault();

    let valueInput= this.state.buscar;
    console.log('valor del formulario ' , valueInput);
    this.props.onSearchPersona(valueInput);

  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="buscar"
              className="form-control"
              value={this.state.buscar}
              onChange={this.handleInputChange}
              placeholder="Buscar"
            />
            <button onClick={ this.handleSearch} className="btn btn-primary">Buscar</button>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={this.state.nombre}
              onChange={this.handleInputChange}
              placeholder="Nombre"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="matricula"
              className="form-control"
              value={this.state.matricula}
              onChange={this.handleInputChange}
              placeholder="Matricula"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="fechanacimiento"
              className="form-control"
              value={this.state.fechanacimiento}
              onChange={this.handleInputChange}
              placeholder="Fecha Nacimiento"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default PersonaForm;
