import React, { Component } from 'react';
import {
 getAllStatesList,
 getAllCategoryTypesList,
 getAllExecuntingUnitListFilter,
 getAllNacionalitiesList,
 getAllDedicationTypesList,
 getAllIngressList,
 getAllIncomeTypeList,
 getAllMunicipalitiesList, getAllParishList,
  postMovPer } from '../../connect_api/employee/EmployeeAPI';
  import {getAllDepartamentBySchoolList, getAllChairList} from '../../connect_api/faculty/FacultyAPI'
import Select from 'react-select';

class MovPersonal extends Component {

    constructor(){
    super();
    this.state = {
      nombre: "",
      apellido: "",
      snombre: "",
      sapellido: "",
      nacionalidad: "",
      NacionalitiesList: [],
      cedula: "",
      estado: "",
      StateList: [],
      municipio: "",
      municipalityList: [],
      parroquia: "",
      parroquiaList : [],
      apartamento: "",
      ingreso: "",
      ingressList: [],
      tip_ingreso: "",
      IncomeType: [],
      fecha_ingreso: "",
      tip_mov: "",
      departamento: "",
      departamentoList : [],
      catedra: "",
      catedraList: [],
      fecha_ini: "",
      fecha_fin: "",
      idac: "",
      categoria: "",
      CategoryTypeList: [],
      dedicacion: "",
      DedicationTypes: [],
      dedicacion_p: "",
      DedicationTypes_p: [],
      sueldo: "",
      ExecuntingUnit: [],
      unidad_ejec: ""


    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelectstate = this.handleChangeSelectstate.bind(this);
    this.handleChangeSelectCategoryType = this.handleChangeSelectCategoryType.bind(this);
    this.handleChangeSelectExecuntingUnit = this.handleChangeSelectExecuntingUnit.bind(this);
    this.handleChangeSelectNacionalities = this.handleChangeSelectNacionalities.bind(this);
    this.handleChangeSelectDedicationTypes = this.handleChangeSelectDedicationTypes.bind(this);
    this.handleChangeSelectDedicationTypes_p = this.handleChangeSelectDedicationTypes_p.bind(this);
    this.handleChangeSelectingress = this.handleChangeSelectingress.bind(this);
    this.handleChangeSelectIncomeType = this.handleChangeSelectIncomeType.bind(this);
}
 componentDidMount() {

  getAllDepartamentBySchoolList(1)
  .then(result => {
    this.setState({
      departamentoList: result
    })
    console.log(this.state.departamentoList);
  });

  getAllStatesList()
  .then(result => {
    this.setState({
      StateList: result
    })
    console.log(this.state.StateList);
  });

     getAllCategoryTypesList()
  .then(result => {
    this.setState({
      CategoryTypeList: result
    })
    console.log(this.state.CategoryTypeList);
  });

    getAllExecuntingUnitListFilter('0710')
  .then(result => {
    this.setState({
      ExecuntingUnit: result
    })
    console.log(this.state.ExecuntingUnit);
  });
  getAllNacionalitiesList()
  .then(result => {
    this.setState({
      NacionalitiesList: result
    })
    console.log(this.state.NacionalitiesList);
  });

    getAllDedicationTypesList()
  .then(result => {
    this.setState({
      DedicationTypes: result
    })
    console.log(this.state.DedicationTypes);
  });

      getAllDedicationTypesList()
  .then(result => {
    this.setState({
      DedicationTypes_p: result
    })
    console.log(this.state.DedicationTypes_p);
  });


      getAllIngressList()
  .then(result => {
    this.setState({
      ingressList: result
    })
    console.log(this.state.ingressList);
  });


      getAllIncomeTypeList()
  .then(result => {
    this.setState({
      IncomeType: result
    })
    console.log(this.state.IncomeType);
  });


 }

 handleSubmit = event => {
   event.preventDefault();
   const data = this.state
   alert(JSON.stringify(data));
   postMovPer(data);

 }

 handleChange = event => {
   this.setState({
     [event.target.id]: event.target.value
   });
 }
 handleChangeSelectstate = event => {
   this.setState({
     estado : event.value
   });
    console.log('estado: ', event.value)
     this.handlechangeMunicipalities(event.value);

 }

 handleChangeSelectMun = event => {
   this.setState({
     municipio : event.value
   });
    console.log('municipio: ', event.value)
     this.handlechangeParish(event.value);

 }

 handleChangeSelectCategoryType = event => {
   this.setState({
     categoria : event.value
   });
 }

 handleChangeSelectExecuntingUnit = event => {
   this.setState({
     unidad_ejec : event.value
   });
 }

  handleChangeSelectNacionalities = event => {
   this.setState({
     nacionalidad : event.value
   });
 }

   handleChangeSelectDedicationTypes = event => {
   this.setState({
     dedicacion : event.value
   });
 }

   handleChangeSelectDedicationTypes_p = event => {
   this.setState({
     dedicacion_p : event.value
   });
 }

   handleChangeSelectingress = event => {
   this.setState({
     ingreso : event.value
   });
 }

   handleChangeSelectIncomeType = event => {
   this.setState({
     tip_ingreso : event.value
   });
 }


 handlechangeMunicipalities = data => {
  this.setState({
    municipalityList: []
  });
  if(data !== 0) {
    getAllMunicipalitiesList(data)
    .then(result => {
      this.setState({
        municipalityList: result
      })
      console.log(this.state.municipalityList);
    });
  }
}

handlechangeChair = data => {
  this.setState({
    catedraList: []
  });
  console.log(this.state.catedraList);
  if(data !== 0) {
    getAllChairList(data)
    .then(result => {
      this.setState({
        catedraList: result
      })
      console.log(this.state.catedraList);
    });
  }
}

handlechangeParish = data => {
  this.setState({
    parroquiaList: []
  });
  if(data !== 0) {
    getAllParishList(data)
    .then(result => {
      this.setState({
        parroquiaList: result
      })
      console.log(this.state.parroquiaList);
    });
  }
}

 handleChangeSelectdept = event => {
   this.setState({
     departamento : event.value
   });
   this.handlechangeChair(event.value);
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
            <input className="form-control" type="text" name="nombre" id="nombre" placeholder="P. Nombre" required value={this.state.nombre} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="snombre"> Segundo Nombre</label>
            <input className="form-control" type="text" name="snombre" id="snombre" placeholder="S. Nombre" value={this.state.snombre} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="apellido">Primer Apellido (*)</label>
            <input className="form-control" type="text" name="apellido" id="apellido" placeholder="P. Apellido" required value={this.state.apellido} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="sapellido"> Segundo Apellido</label>
            <input className="form-control" type="text" name="sapellido" id="sapellido" placeholder="S. Apellido" value={this.state.sapellido} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="nacionalidad"> Nacionalidad</label>
         <Select
              onChange={this.handleChangeSelectNacionalities}
              options={this.state.NacionalitiesList.map(nac =>(
              {label: nac.Name, value : nac.ID}
            ))}
            />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="cedula">Cédula (*)</label>
            <input className="form-control" type="text" name="cedula" id="cedula" placeholder="Cédula" required value={this.state.cedula} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-12">
          <hr></hr>
              <h1 align="center">Dirección</h1>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="estado">Estado (*)</label>
         <Select
              onChange={this.handleChangeSelectstate}
              options={this.state.StateList.map(st =>(
              {label: st.states, value : st.ID}
            ))}
            />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="municipio">Municipio (*)</label>
     <Select
            onChange={this.handleChangeSelectMun}
            options={this.state.municipalityList.map(mun =>(
            {label: mun.muni, value : mun.ID}
          ))}
          />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="parroquia">Parroquia (*)</label>
            <Select
                   options={this.state.parroquiaList.map(mun =>(
                   {label: mun.parish, value : mun.ID}
                 ))}
                 />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="apartamento">Apartamento</label>
            <input className="form-control" type="text" name="apartamento" id="apartamento" placeholder="Apartamento" value={this.state.apartamento} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-12">
          <hr></hr>
              <h1 align="center">Datos Laborales</h1>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="ingreso">Ingreso (*)</label>
        <Select
              onChange={this.handleChangeSelectingress}
              options={this.state.ingressList.map(ing =>(
              {label: ing.Ingress, value : ing.id}
            ))}
            />
      </div>



      <div className="form-group col-md-3">
            <label htmlFor="tip_ingreso">Tipo de Ingreso (*)</label>
        <Select
              onChange={this.handleChangeSelectIncomeType}
              options={this.state.IncomeType.map(income =>(
              {label: income.income, value : income.ID}
            ))}
            />
      </div>

      <div className="form-group col-md-3">
        <label htmlFor="fecha_ingreso">Fecha de Ingreso (*)</label>
            <input className="form-control" type="date" name="fecha_ingreso" id="fecha_ingreso" required value={this.state.fecha_ingreso} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="tip_mov">Tipo de Movimiento (*)</label>
            <select className="form-control" id="tip_mov" name="tip_mov" required value={this.state.tip_mov} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

  <div className="form-group col-md-3">
          <label htmlFor="departamento">Departamento (*)</label>
          <Select
            onChange={this.handleChangeSelectdept}
            options={this.state.departamentoList.map(dept =>(
            {label: dept.name, value : dept.ID}
          ))}
          />
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="catedra">Cátedra (*)</label>
          <Select
            options={this.state.catedraList.map(cat =>(
            {label: cat.name, value : cat.ID}
          ))}
          />
    </div>
       <div className="form-group col-md-3">
            <label htmlFor="unidad_ejec">Unidad Ejecutora (*)</label>
         <Select
              onChange={this.handleChangeSelectExecuntingUnit}
              options={this.state.ExecuntingUnit.map(EU =>(
              {label: EU.des, value : EU.ID}
            ))}
            />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="idac">IDAC (*)</label>
            <select className="form-control" id="idac" name="idac" required value={this.state.idac} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="dedicacion">Dedicación Actual (*)</label>
       <Select
              onChange={this.handleChangeSelectDedicationTypes}
              options={this.state.DedicationTypes.map(dt =>(
              {label: dt.dedi, value : dt.ID}
            ))}
            />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="dedicacion_p">Dedicación Propuesta</label>
       <Select
              onChange={this.handleChangeSelectDedicationTypes_p}
              options={this.state.DedicationTypes_p.map(dtp =>(
              {label: dtp.dedi, value : dtp.ID}
            ))}
            />
      </div>


      <div className="form-group col-md-3">
            <label htmlFor="categoria">Categoria (*)</label>
        <Select
              onChange={this.handleChangeSelectCategoryType}
              options={this.state.CategoryTypeList.map(ct =>(
              {label: ct.name, value : ct.ID}
            ))}
            />
      </div>



         <div className="form-group col-md-3">
            <label htmlFor="sueldo"> Sueldo</label>
            <input className="form-control" type="number" name="sueldo" id="sueldo" placeholder="Sueldo" value={this.state.sueldo} onChange={this.handleChange}/>
      </div>


      <div className="form-group col-md-3">
        <label htmlFor="fecha_ini">Fecha de Inicio (*)</label>
            <input className="form-control" type="date" name="fecha_ini" id="fecha_ini" required value={this.state.fecha_ini} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
        <label htmlFor="fecha_fin">Fecha de Fin (*)</label>
            <input className="form-control" type="date" name="fecha_fin" id="fecha_fin" required value={this.state.fecha_fin} onChange={this.handleChange}/>
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
