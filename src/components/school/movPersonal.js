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
import {getAllMovementTypeslist} from '../../connect_api/formData/formDataAPI'
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
    tipoMovList: [],
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
    this.handleChangeSelectTypesMov = this.handleChangeSelectTypesMov.bind(this);

}
 componentDidMount() {


  getAllStatesList()
  .then(result => {
    this.setState({
      StateList: result
    })
    console.log(this.state.StateList);
  });

   getAllMovementTypeslist()
  .then(result => {
    this.setState({
      tipoMovList: result
    })
    console.log("tipoMovList: ",this.state.tipoMovList);
  });
 

     getAllCategoryTypesList()
  .then(result => {
    this.setState({
      CategoryTypeList: result
    })
    console.log(this.state.CategoryTypeList);
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



obtaintExec = () => {
  getAllExecuntingUnitListFilter(this.state.schoolData[0].codeFilter)
  .then(result => {
    this.setState({
      ExecuntingUnit : result
    })
    console.log("ExecuntingUnit: ",this.state.ExecuntingUnit);
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

  handleChangeSelectTypesMov = event => {
   this.setState({
     tip_mov : event.value
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

obtaintDept = () => {
  getAllDepartamentBySchoolList(this.state.schoolData[0].ID)
  .then(result => {
    this.setState({
      departamentoList: result
    })
    console.log("departamentoList: ", this.state.departamentoList);
  });
}


 handleChangeSelectdept = event => {
   this.setState({
     departamento : event.value
   });
   this.handlechangeChair(event.value);
 }



  render() {
    return (
    <div  className="content">


     <h1 align="center">Solicitud de Movimiento de Personal</h1>
      <hr></hr>

      <h1 align="center">Datos Personales</h1>
      <hr></hr>

        <br></br>

        <form className="row justify-content">

        <div className="form-group col-md-3">
            <label htmlFor="nombre">Primer Nombre <a style={{color:'red'}}>*</a></label>
            <input className="form-control" type="text" name="nombre" id="nombre" placeholder="P. Nombre" required value={this.state.nombre} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="snombre"> Segundo Nombre</label>
            <input className="form-control" type="text" name="snombre" id="snombre" placeholder="S. Nombre" value={this.state.snombre} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="apellido">Primer Apellido <a style={{color:'red'}}>*</a></label>
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
            <label htmlFor="cedula">Cédula <a style={{color:'red'}}>*</a></label>
            <input className="form-control" type="text" name="cedula" id="cedula" placeholder="Cédula" required value={this.state.cedula} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-12">
          <hr></hr>
              <h1 align="center">Dirección</h1>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="estado">Estado <a style={{color:'red'}}>*</a></label>
        <Select
              onChange={this.handleChangeSelectstate}
              options={this.state.StateList.map(st =>(
              {label: st.states, value : st.ID}
            ))}
            />
      </div>


      <div className="form-group col-md-3">
            <label htmlFor="municipio">Municipio <a style={{color:'red'}}>*</a></label>
     <Select
            onChange={this.handleChangeSelectMun}
            options={this.state.municipalityList.map(mun =>(
            {label: mun.muni, value : mun.ID}
          ))}
          />
      </div>


      <div className="form-group col-md-3">
            <label htmlFor="parroquia">Parroquia <a style={{color:'red'}}>*</a></label>
            <Select
                   options={this.state.parroquiaList.map(mun =>(
                   {label: mun.parish, value : mun.ID}
                 ))}
                 />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="sector">Sector <a style={{color:'red'}}>*</a></label>
            <input className="form-control" type="text" name="sector" id="sector" placeholder="Sector" value={this.state.sector} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="calle">Calle <a style={{color:'red'}}>*</a></label>
            <input className="form-control" type="text" name="calle" id="calle" placeholder="Calle" value={this.state.calle} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="num_casa_apart">Num casa o Apartamento <a style={{color:'red'}}>*</a></label>
            <input className="form-control" type="text" name="num_casa_apart" id="num_casa_apart" placeholder="Número de Casa o Apartamento" value={this.state.num_casa_apart} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-12">
          <hr></hr>
              <h1 align="center">Datos Laborales</h1>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="ingreso">Ingreso <a style={{color:'red'}}>*</a></label>
          <Select
              onChange={this.handleChangeSelectingress}
              options={this.state.ingressList.map(ing =>(
              {label: ing.Ingress, value : ing.id}
            ))}
            />
      </div>



      <div className="form-group col-md-3">
            <label htmlFor="tip_ingreso">Tipo de Ingreso <a style={{color:'red'}}>*</a></label>
        <Select
              onChange={this.handleChangeSelectIncomeType}
              options={this.state.IncomeType.map(income =>(
              {label: income.income, value : income.ID}
            ))}
            />
      </div>


      <div className="form-group col-md-3">
        <label htmlFor="fecha_ingreso">Fecha de Ingreso <a style={{color:'red'}}>*</a></label>
            <input className="form-control" type="date" name="fecha_ingreso" id="fecha_ingreso" required value={this.state.fecha_ingreso} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="tip_mov">Tipo de Movimiento <a style={{color:'red'}}>*</a></label>
      <Select
              onChange={this.handleChangeSelectTypesMov}
              options={this.state.tipoMovList.map(mt =>(
              {label: mt.name, value : mt.ID}
            ))}
            />
    </div>

  <div className="form-group col-md-3">
          <label htmlFor="departamento">Departamento <a style={{color:'red'}}>*</a></label>
        <Select
            onChange={this.handleChangeSelectdept}
            options={this.state.departamentoList.map(dept =>(
            {label: dept.name, value : dept.ID}
          ))}
          />
    </div>


    <div className="form-group col-md-3">
          <label htmlFor="catedra">Cátedra <a style={{color:'red'}}>*</a></label>
          <Select
            options={this.state.catedraList.map(cat =>(
            {label: cat.name, value : cat.ID}
          ))}
          />
    </div>
       <div className="form-group col-md-3">
            <label htmlFor="unidad_ejec">Unidad Ejecutora <a style={{color:'red'}}>*</a></label>
       <Select
              onChange={this.handleChangeSelectExecuntingUnit}
              options={this.state.ExecuntingUnit.map(EU =>(
              {label: EU.des, value : EU.ID}
            ))}
            />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="idac">IDAC <a style={{color:'red'}}>*</a></label>
            <select className="form-control" id="idac" name="idac" required value={this.state.idac} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="dedicacion">Dedicación Actual <a style={{color:'red'}}>*</a></label>
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
            <label htmlFor="categoria">Categoria <a style={{color:'red'}}>*</a></label>
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
        <label htmlFor="fecha_ini">Fecha de Inicio <a style={{color:'red'}}>*</a></label>
            <input className="form-control" type="date" name="fecha_ini" id="fecha_ini" required value={this.state.fecha_ini} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
        <label htmlFor="fecha_fin">Fecha de Fin <a style={{color:'red'}}>*</a></label>
            <input className="form-control" type="date" name="fecha_fin" id="fecha_fin" required value={this.state.fecha_fin} onChange={this.handleChange}/>
      </div>

  <div className="form-group col-md-3">
    <label htmlFor="anexo">Anexos <a style={{color:'red'}}>*</a></label>
        <textarea name="anexo" required placeholder="Curriculum con sus anexos"></textarea>
  </div>

  <div className="form-group col-md-3">
    <label htmlFor="motivo">Motivos <a style={{color:'red'}}>*</a></label>
        <textarea name="motivo" required placeholder="Indique el motivo de la Planilla"></textarea>
  </div>

  <div className="form-group col-md-12">
          <hr></hr>
              <h6 align="center"  style={{color:'red'}}>Campos Obligatorios *</h6>
            <hr></hr>
      </div>

    <div className="form-group col-md-12">

        <div className="row justify-content-center">

          <button className="btn btn-primary col-md-3" style={{'margin-right':'100px'}}>Enviar</button>
          <button className="btn btn-primary col-md-3">Restablecer</button>

        </div>

      </div>

      </form>

      </div>
    );
  }

}

export default MovPersonal;
