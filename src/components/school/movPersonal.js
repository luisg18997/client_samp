import React, { Component } from 'react';

class MovPersonal extends Component {

    constructor(){
    super();
    this.state = {
      nombre: "",
      apellido: "",
      snombre: "",
      sapellido: "",
      nacionalidad: "",
      cedula: "",

      estado: "",
      municipio: "",
      parroquia: "",
      apartamento: "",

      ingreso: "",
      tip_ingreso: "",
      fecha_ingreso: "",
      tip_mov: "",
      departamento: "",
      catedra: "",
      fecha_ini: "",
      fecha_fin: "",
      idac: "",
      categoria: "",
      dedicacion: "",
      dedicacion_p: "",
      sueldo: "",
      unidad_ejec: ""

    }
  }

 updateNombre(event) {
    this.setState({
      nombre: event.target.value
    });
  }

  updateSNombre(event) {
    this.setState({
      snombre: event.target.value
    });
  }

 updateApellido(event) {
    this.setState({
      apellido: event.target.value
    });
  }

  updateSApellido(event) {
    this.setState({
      sapellido: event.target.value
    });
  }

 updateEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  updateNacionalidad(event) {
    this.setState({
      nacionalidad: event.target.value
    });
  }

  updateCedula(event) {
    this.setState({
      cedula: event.target.value
    });
  }

   updateEstado(event) {
    this.setState({
      estado: event.target.value
    });
  }

   updateMunicipio(event) {
    this.setState({
      municipio: event.target.value
    });
  }

  updateParroquia(event) {
    this.setState({
      parroquia: event.target.value
    });
  }

  updateApartamento(event) {
    this.setState({
      apartamento: event.target.value
    });
  }

  updateIngreso(event) {
    this.setState({
      ingreso: event.target.value
    });
  }

  updateTipIngreso(event) {
    this.setState({
      tip_ingreso: event.target.value
    });
  }

  updateFechaIngreso(event) {
    this.setState({
      fecha_ingreso: event.target.value
    });
  }

  updateTipoMov(event) {
    this.setState({
      tip_mov: event.target.value
    });
  }

  updateDedicacion(event) {
    this.setState({
      dedicacion: event.target.value
    });
  }

  updateDedicacionP(event) {
    this.setState({
      dedicacion_p: event.target.value
    });
  }

  updateCategoria(event) {
    this.setState({
      categoria: event.target.value
    });
  }

  updateSueldo(event) {
    this.setState({
      sueldo: event.target.value
    });
  }

  updateDepartamento(event) {
    this.setState({
      departamento: event.target.value
    });
  }

  updateCatedra(event) {
    this.setState({
      catedra: event.target.value
    });
  }

  updateFechaIni(event) {
    this.setState({
      fecha_ini: event.target.value
    });
  }

  updateFechaFin(event) {
    this.setState({
      fecha_fin: event.target.value
    });
  }

  updateIdac(event) {
    this.setState({
      idac: event.target.value
    });
  }

  updateUnidadEjec(event) {
    this.setState({
      unidad_ejec: event.target.value
    });
  }

  render() {
    return (

      <div className="container">

      <h1 align="center">Datos Personales</h1>
      <hr></hr>

        <br></br>

        <form className="row justify-content">

        <div className="form-group col-md-3">
            <label htmlFor="nombre">Primer Nombre (*)</label>
            <input className="form-control" type="text" name="nombre" id="nombre" placeholder="P. Nombre" required value={this.state.nombre} onChange={this.updateNombre.bind(this)}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="snombre"> Segundo Nombre</label>
            <input className="form-control" type="text" name="snombre" id="snombre" placeholder="S. Nombre" value={this.state.snombre} onChange={this.updateSNombre.bind(this)}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="apellido">Primer Apellido (*)</label>
            <input className="form-control" type="text" name="apellido" id="apellido" placeholder="P. Apellido" required value={this.state.apellido} onChange={this.updateApellido.bind(this)}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="sapellido"> Segundo Apellido</label>
            <input className="form-control" type="text" name="sapellido" id="sapellido" placeholder="S. Apellido" value={this.state.sapellido} onChange={this.updateSApellido.bind(this)}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="nacionalidad"> Nacionalidad</label>
            <select className="form-control" id="nacionalidad" name="nacionalidad" placeholder="Género" value={this.state.nacionalidad} onChange={this.updateNacionalidad.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> V </option>
              <option value="b"> E </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="cedula">Cédula (*)</label>
            <input className="form-control" type="text" name="cedula" id="cedula" placeholder="Cédula" required value={this.state.cedula} onChange={this.updateCedula.bind(this)}/>
      </div>

      <div className="form-group col-md-12">
      		<hr></hr>
            	<h1 align="center">Dirección</h1>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="estado">Estado (*)</label>
            <select className="form-control" id="estado" name="estado" placeholder="Género" required value={this.state.estado} onChange={this.updateEstado.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> Masculino </option>
              <option value="b"> Femenino </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="municipio">Municipio (*)</label>
            <select className="form-control" id="municipio" name="municipio" placeholder="Género" required value={this.state.municipio} onChange={this.updateMunicipio.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> Masculino </option>
              <option value="b"> Femenino </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="parroquia">Parroquia (*)</label>
            <select className="form-control" id="parroquia" name="parroquia" placeholder="Parroquia" required value={this.state.genero} onChange={this.updateParroquia.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> Masculino </option>
              <option value="b"> Femenino </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="apartamento">Apartamento</label>
            <input className="form-control" type="text" name="apartamento" id="apartamento" placeholder="Apartamento" value={this.state.apartamento} onChange={this.updateApartamento.bind(this)}/>
      </div>

      <div className="form-group col-md-12">
      		<hr></hr>
            	<h1 align="center">Datos Laborales</h1>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="ingreso">Ingreso (*)</label>
            <select className="form-control" id="ingreso" name="ingreso" required value={this.state.ingreso} onChange={this.updateIngreso.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="tip_ingreso">Tipo de Ingreso (*)</label>
            <select className="form-control" id="tip_ingreso" name="tip_ingreso" required value={this.state.tip_ingreso} onChange={this.updateTipIngreso.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
        <label htmlFor="fecha_ingreso">Fecha de Ingreso (*)</label>
            <input className="form-control" type="date" name="fecha_ingreso" id="fecha_ingreso" required value={this.state.fecha_ingreso} onChange={this.updateFechaIngreso.bind(this)}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="tip_mov">Tipo de Movimiento (*)</label>
            <select className="form-control" id="tip_mov" name="tip_mov" required value={this.state.tip_mov} onChange={this.updateTipoMov.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="departamento">Departamento (*)</label>
            <select className="form-control" id="departamento" name="departamento" required value={this.state.departamento} onChange={this.updateDepartamento.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="catedra">Cátedra (*)</label>
            <select className="form-control" id="catedra" name="catedra" required value={this.state.catedra} onChange={this.updateCatedra.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

       <div className="form-group col-md-3">
            <label htmlFor="unidad_ejec">Unidad Ejecutora (*)</label>
            <select className="form-control" id="unidad_ejec" name="unidad_ejec" required value={this.state.unidad_ejec} onChange={this.updateUnidadEjec.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="idac">IDAC (*)</label>
            <select className="form-control" id="idac" name="idac" required value={this.state.idac} onChange={this.updateIdac.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="dedicacion">Dedicación Actual (*)</label>
            <select className="form-control" id="dedicacion" name="dedicacion" required value={this.state.dedicacion} onChange={this.updateDedicacion.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="dedicacion_p">Dedicación Propuesta</label>
            <select className="form-control" id="dedicacion_p" name="dedicacion_p" value={this.state.dedicacion_p} onChange={this.updateDedicacionP.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="categoria">Categoria (*)</label>
            <select className="form-control" id="categoria" name="categoria" required value={this.state.categoria} onChange={this.updateCategoria.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="sueldo">Sueldo (*)</label>
            <select className="form-control" id="sueldo" name="sueldo" required value={this.state.sueldo} onChange={this.updateSueldo.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
        <label htmlFor="fecha_ini">Fecha de Inicio (*)</label>
            <input className="form-control" type="date" name="fecha_ini" id="fecha_ini" required value={this.state.fecha_ini} onChange={this.updateFechaIni.bind(this)}/>
      </div>

      <div className="form-group col-md-3">
        <label htmlFor="fecha_fin">Fecha de Fin (*)</label>
            <input className="form-control" type="date" name="fecha_fin" id="fecha_fin" required value={this.state.fecha_fin} onChange={this.updateFechaFin.bind(this)}/>
      </div>

	<div className="form-group col-md-3">
		<label htmlFor="anexo">Anexos (*)</label>
      	<textarea name="anexo" required placeholder="Curriculum con sus anexos"></textarea>
	</div>

	<div className="form-group col-md-3">
		<label htmlFor="motivo">Motivos (*)</label>
      	<textarea name="motivo" required placeholder="Indique el motivo de la Planilla"></textarea>
	</div>

	<div className="form-group col-md-12">
      		<hr></hr>
            	<h6 align="center">Campos Obligatorios (*)</h6>
            <hr></hr>
      </div>

	  <div className="form-group col-md-12">

      	<div className="row justify-content-center">

        	<button className="btn btn-primary col-md-3">Enviar</button>
        	<button className="btn btn-primary col-md-3">Restablecer</button>

        </div>

      </div>

      </form>

      </div>
    );
  }

}

export default MovPersonal;
