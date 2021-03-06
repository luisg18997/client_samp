import React, { Component, Fragment} from 'react';
import { Container, Row, Col, MDBBtn } from 'mdbreact';
import {Label, LabelRequired, select} from '../util/forms';
import {
  getAllRolesList,
  addNewUserByAdmin,
 } from '../../connect_api/user/userAPI';
 import {
 getSchoolList,
 getInstituteList,
 getCoordinationList
 } from '../../connect_api/faculty/FacultyAPI';
 import Authorization from '../redirectPrincipal';
 import {validateText, validateEmail} from '../util/validations';

class AddNewUserByAdmin extends Component {

    constructor(props){
    super(props);
    this.auth = new Authorization();
    this.state = {
      user: {},
      nombre: "",
      apellido: "",
      email: "",
      clave: "123456",
      rol : "",
      rolList: [],
      ubicacion: 0,
      ubicacionList: [],
      escuela: "",
      instituto: "",
      coordinacion : "",
      schoolList: "",
      instituteList: "",
      coordinationList: "",
      isLoaded: false,
      auth: false,
      //focus
      nombreFocus: false,
      apellidoFocus: false,
      emailFocus: false,
      //validate
      nombreValidate: false,
      apellidoValidate: false,
      emailValidate: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelectub = this.handleChangeSelectub.bind(this);
  }
  async componentWillMount() {
    if (await this.auth.loggedIn()) {
      const result = await this.auth.ObtainData();
      const user = result.data;
      const rolList = await getAllRolesList();
      this.setState({
        user,
        isLoaded: true,
        auth: true,
	rolList
      })
    }
  }


 handleSubmit = async(event) => {
   event.preventDefault();
   const user = {
     name : this.state.nombre.toUpperCase(),
     surname : this.state.apellido.toUpperCase(),
     email: this.state.email,
     password: this.state.clave,
     ubication: this.state.ubicacion,
     roleUserID : this.state.rol,
     userID: this.state.user.id,
     schoolID: this.state.escuela,
     coordinationID: this.state.coordinacion,
     instituteID:this.state.instituto,
   }
   const result = await addNewUserByAdmin(user);
   console.log('result: ', result);
   if(result === 1) {
     alert('usuario creado exitosamente');
     this.props.history.replace('/Admin');
   } else {
     alert('usuario ya existente');
     this.props.history.replace('/Admin');
   }
 }

 handleChange = event => {
   this.setState({
     [event.target.name]: event.target.value
   });
   console.log(event.target.name,': ',event.target.value);
 }

 async handleValidateEmail(data, name, focus, nameFocus,  validateName) {
   const result = validateEmail(data, name, focus);
   console.log(result);
   await this.setState({
     [nameFocus]: result,
     [validateName]: !result
   });
   console.log('this.state: ', this.state);
   return !result;
 }

 async handleValidateText(data, name, focus, nameFocus,  validateName) {
   const result = validateText(data, name, focus);
   console.log(result);
   await this.setState({
     [nameFocus]: result,
     [validateName]: !result
   });
   console.log('this.state: ', this.state);
   return !result;
 }

 handleChangeSelectub(event){
   console.log("event: ", event.target.value);
   let ubication = 0;
   switch (event.target.value) {
     case '1':{
       console.log('administrador');
       ubication = 1;
       break;
     }
     case '2':{
       console.log('escuela');
       ubication = 2;
       break;
     }
     case '3':{
       console.log('escuela');
       ubication = 2;
       break;
     }
     case '4':{
       console.log('instituto');
       ubication = 3;
       break;
     }
     case '5':{
       console.log('instituto');
       ubication = 3;
       break;
     }
     case '6':{
       console.log('Coordinacion');
       ubication = 4;
       break;
     }
     case '7':{
       console.log('Coordinacion');
       ubication = 4;
       break;
     }
     case '8':{
       console.log('departamento de RRHH');
       ubication = 5;
       break;
     }
     case '9':{
       console.log('departamento de RRHH');
       ubication = 5;
       break;
     }
     case '10':{
       console.log('departamento de presupuesto');
       ubication = 6;
       break;
     }
     case '11':{
       console.log('departamento de presupuesto');
       ubication = 6;
       break;
     }
     default:
     console.log('ninguna ubicacion');
     ubication = 0;
   }

   console.log('ubicacion: ', ubication);
   this.setState({
     rol : event.target.value,
     ubicacion: ubication,
     escuela: 0,
     instituto: 0,
     coordinacion : 0,
     schoolList: [],
     instituteList: [],
     coordinationList: []
   });
   console.log("rol: ", this.state.rol);
   if (event.target.value === "2") {
     this.handleChangeSchoolList();
   } else if (event.target.value === "3") {
     this.handleChangeInstitutelList();
   } else if (event.target.value === "4") {
     this.handleChangeCoordinationList();
   }
}

async handleChangeSchoolList(){
	const schoolList = await getSchoolList()
	this.setState({
		schoolList
	})
	console.log("schoolList: ", this.state.schoolList)
}

async handleChangeInstitutelList(){
	const instituteList = await getInstituteList()
	this.setState({
		instituteList
	})
	console.log("instituteList: ", this.state.instituteList)
}

async handleChangeCoordinationList(){
	const coordinationList = await getCoordinationList()
	this.setState({
		coordinationList
	})
	console.log("coordinationList: ", this.state.coordinationList)
}

validateForm() {
  return this.state.emailValidate && this.state.nombreValidate && this.state.apellidoValidate;
}
  render() {
    const {
      nombre,
      apellido,
      email,
      rol,
      ubicacion,
      escuela,
      instituto,
      coordinacion
    } = this.state;
    if (!this.state.isLoaded) {
			return (<div className="loader"></div>);
		} else {
    return (
      <div className="content">
        <Container  className="mt-1">
          <Row className="mt-2">
            <Col>
              <p className="h2 text-center mb-6">Registro de Usuario</p>
        <br></br>
        <form onSubmit={this.handleSubmit}  style={{width: '590px', marginLeft:'150px',marginRight:' 300px'}} className="form-container">
        <div  className="form-group">
          {Label(LabelRequired('Nombre'),'text','nombre', nombre,this.handleChange, true, (e) => this.handleValidateText(e.target,'Nombre', this.state.nombreFocus,'nombreFocus','nombreValidate'),this.state.nombreFocus.toString())}
      </div>

      <div className="form-group">
        {Label(LabelRequired('Apellido'),'text','apellido', apellido,this.handleChange, true, (e) => this.handleValidateText(e.target,'Apellido', this.state.apellidoFocus, 'apellidoFocus', 'apellidoValidate'), this.state.apellidoFocus.toString())}
      </div>

      <div className="form-group">
        {Label(LabelRequired('Email'),'email','email', email,this.handleChange, true , (e) => this.handleValidateEmail(e.target, 'Email', this.state.emailFocus, 'emailFocus', 'emailValidate'), this.state.emailFocus.toString())}
      </div>

      <div className="form-group">
        {select(LabelRequired('Rol'),'rol', rol, this.handleChangeSelectub, this.state.rolList, true)}
      </div>
      {
        ubicacion === 2?
        <Fragment>
          <div className="form-group">
            {select(LabelRequired('Escuela'), 'escuela', escuela,this.handleChange,this.state.schoolList, true)}
          </div>
        </Fragment>
        :ubicacion === 3?
        <Fragment>
          <div className="form-group">
            {select(LabelRequired('Instituto'), 'instituto', instituto,this.handleChange,this.state.instituteList, true)}
          </div>
        </Fragment>
        :ubicacion === 4?
        <Fragment>
          <div className="form-group">
            {select(LabelRequired('Coordinacion'), 'coordinacion', coordinacion,this.handleChange,this.state.coordinationList, true)}
          </div>
        </Fragment>
          :<span></span>
      }
      <br></br>
      <div  className="form-group col-md-14">
      <div className="row justify-content-center">
      <MDBBtn color="info" type="submit" disabled={!this.validateForm()} className=" col-md-3" style={{marginRight:'100px'}}>Enviar</MDBBtn>
      <MDBBtn color="info" type="reset" className="col-md-3" > Restablecer  </MDBBtn>
      </div>
      </div>
        </form>
      </Col>
    </Row>
      </Container>
      </div>
    );
  }
  }


}

export default AddNewUserByAdmin;
