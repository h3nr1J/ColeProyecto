import { Component, OnInit } from '@angular/core';

import { Alumno, Cursos } from './interfaces/alumno';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  AlumnoVacio(): Alumno{
    return{
      codigo:"",
  nombre:"",
  email:"",
    }
  };
  public alumno: Alumno = this.AlumnoVacio();
  public alumnos:Alumno[]=[];
  public nombre:string="Roberto";
  public curso:Cursos ={  
    primero:"Matematica",   
    segundo:"Quimica", 
    tercero:"Fisica", 
    cuarto:"Educacion Fisica", 
    quinto:"Religion", 
    sexto:"Arte"
  }
  onDatos():void{
  console.log(this.alumno);
  this.alumnos.push(this.alumno);
  this.alumno = this.AlumnoVacio();
  console.log('El arreglo tiene ',this.alumnos.length,'elementos')
}
// onChange(event: Event):void{
//   const elemento = event.target as HTMLInputElement;
//   this.alumno.nombre = elemento.value;
// }
//Guardar notas
public posicion: number = -1;

Pos(i: number){
  this.posicion = i;
  console.log(this.posicion);
}

onEditar(){
  
  this.alumnos[this.posicion].nombre=this.nombre;
  console.log(this.alumnos[this.posicion]); 
}
onEliminar(i:number):void{
  this.alumnos.splice(i,1);
}
}

