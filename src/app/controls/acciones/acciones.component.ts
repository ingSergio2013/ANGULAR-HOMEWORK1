import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.scss']
})
export class AccionesComponent implements OnInit {
  
  //@Output() newPanel = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  /*acciones = [
    {
      id: 1,
      title: 'Tareas',
      button: 'Agregar nueva tarea'
    },
    {
      id: 2,
      title: 'Paneles',
      button: 'Agregar nuevo panel'
    }
  ];*/

  internalClick(accion : any) 
  {
    console.log('click interno');
    /*const idAccion = accion.id;

    if (idAccion === 1)
      console.log('nueva accion');
    if (idAccion === 2)
    {
        console.log('nuevo panel');
    }
      this.newPanel.emit();*/
       
    //console.log(accion);

  }

}
