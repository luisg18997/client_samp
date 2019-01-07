import React, { Component} from 'react';
import  { Link } from 'react-router-dom';
import { Container, Row, Col, MDBBtn } from 'mdbreact';
import Select from 'react-select';
import {Label, LabelRequired} from '../util/forms';
import {
	getAllUbicationsList,
	 addNewUser
  } from '../../connect_api/user/userAPI';
import {
getSchoolList,
getInstituteList,
getCoordinationList
} from '../../connect_api/faculty/FacultyAPI';

class RegistroUsuario extends Component {
	constructor(){
    super();
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      clave: "",
			confiClave:"",
      ubicacionList: [],
			ubicacion: "",
			schoolList: [],
			escuela: 0,
			instituteList : [],
			instituto: 0,
			coordinationList: [],
			coordinacion: 0,
			ubicacionUsuario: 0
    }
    this.handleChangeSelectub = this.handleChangeSelectub.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
		this.handleChangeSelectschool = this.handleChangeSelectschool.bind(this);
		this.handleChangeSelectInst = this.handleChangeSelectInst.bind(this);
		this.handleChangeSelectCoord = this.handleChangeSelectCoord.bind(this);
  }
	componentDidMount() {
		getAllUbicationsList()
		.then(result => {
			this.setState({
				ubicacionList : result
			});
			console.log(this.state);
		})
	}

	handleChangeSelectub(event){
		console.log("event: ", event.value);
		this.setState({
			ubicacion : event.value,
			escuela: 0,
			instituto: 0,
			coordinacion : 0,
			schoolList: [],
			instituteList: [],
			coordinationList: []
		});
		console.log("ubicacion: ", this.state.ubicacion);
		console.log("ubicacionUsuario: ", this.state.ubicacionUsuario);
		if (event.value === 2) {
			this.handleChangeSchoolList();
		} else if (event.value === 3) {
			this.handleChangeInstitutelList();
		} else if (event.value === 4) {
			this.handleChangeCoordinationList();
 		}
}

handleChangeSchoolList(){
	getSchoolList()
	.then(result => {
		this.setState({
			schoolList : result
		})
		console.log("schoolList: ", this.state.schoolList)
	})
}

handleChangeInstitutelList(){
	getInstituteList()
	.then(result => {
		this.setState({
			instituteList : result
		})
		console.log("instituteList: ", this.state.instituteList)
	})
}

handleChangeCoordinationList(){
	getCoordinationList()
	.then(result => {
		this.setState({
			coordinationList : result
		})
		console.log("coordinationList: ", this.state.coordinationList)
	})
}

handleChangeSelectschool(event){
	console.log("event: ", event.value);
	this.setState({
		escuela : event.value
	})
	console.log("escuela: ", this.state.escuela);
}

handleChangeSelectInst(event){
	console.log("event: ", event.value);
	this.setState({
		instituto : event.value
	})
	console.log("instituto: ", this.state.instituto);
}

handleChangeSelectCoord(event){
	console.log("event: ", event.value);
	this.setState({
		coordinacion : event.value
	})
	console.log("coordinacion: ", this.state.coordinacion);
}

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
		console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
		const user = {
			name : this.state.nombre.toUpperCase(),
			surname : this.state.apellido.toUpperCase(),
			email: this.state.email,
			password: this.state.clave,
			ubication: this.state.ubicacion,
			schoolID: this.state.escuela,
			coordinationID: this.state.coordinacion,
			instituteID:this.state.instituto,
		}
		console.log("user: ", user);
		addNewUser(user)
		.then(result => {
			if(result === 1) {
				alert('usuario creado exitosamente');
				this.props.history.replace('/');
			} else {
				alert('usuario ya existente');
				this.props.history.replace('/Registro');
			}
		});
  }

	render(){
		const ubicacion = this.state.ubicacion
		return(
			<Container  className="mt-1">
				<Row className="mt-2">
					<Col>
						<p className="h2 text-center mb-6">Registro de Usuario</p>
						<form onSubmit={this.handleSubmit}>
							<div className="grey-text">
								{Label(LabelRequired('nombre'),'text','nombre',this.state.nombre,this.handleChange,true)}

								{Label(LabelRequired('Apellido'),'text','apellido',this.state.apellido,this.handleChange,true)}

								{Label(LabelRequired('email'),'email','email',this.state.email,this.handleChange, true)}

								{Label(LabelRequired('clave'),'password','clave',this.state.clave,this.handleChange)}

								{Label(LabelRequired('Confirmar clave'),'password','confiClave',this.state.confiClave,this.handleChange)}

							<label htmlFor="ubicacion"> Ubicación</label>
					<Select
							placeholder={'ubicacion'}
							onChange={this.handleChangeSelectub}
							options={this.state.ubicacionList.map(ub =>(
								{label: ub.Ubicacion, value : ub.ID}
							))}
							/>
						<br/>
							{ubicacion === 2?
								<Select
								placeholder={'Escuela'}
								onChange={this.handleChangeSelectschool}
								options={this.state.schoolList.map(ub =>(
									{label: ub.name, value : ub.ID}
								))}
								/>:ubicacion === 3?
								<Select
								placeholder={'Instituto'}
								onChange={this.handleChangeSelectInst}
								options={this.state.instituteList.map(ub =>(
									{label: ub.name, value : ub.ID}
								))}
								/>:ubicacion === 4?
								<Select
								placeholder={'Coordinacion'}
								onChange={this.handleChangeSelectCoord}
								options={this.state.coordinationList.map(ub =>(
									{label: ub.name, value : ub.ID}
								))}
								/>
								:<label></label>
							}
					</div>
					<br></br>
<div  className="form-group col-md-12">
	<div className="row justify-content-center">
		<MDBBtn color="light-blue" type="submit" className="col-md-3" style={{marginRight:'100px'}} >Enviar</MDBBtn>
		<MDBBtn color="light-blue" type="reset" className="col-md-3" > Restablecer  </MDBBtn>
</div>
</div>
			</form>
			<MDBBtn color="light-blue"><Link to='/'  style={{ textDecoration: 'none',
	'color':' white'}}> Inicio de sesión </Link> </MDBBtn>
			</Col>
		</Row>
			</Container>
		)
	}
}

export default RegistroUsuario;
