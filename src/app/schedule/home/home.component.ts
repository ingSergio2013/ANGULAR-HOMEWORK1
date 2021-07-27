import { Component, Input, OnInit } from '@angular/core';
import { Panels } from '../models/Panels';
import { Tasks } from '../models/Tasks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() panel?: Panels;
 
  panels : Array<Panels> = [
    {
      id: 1,
      title: 'Tarea Sin Catalogar'
    },
    {
      id: 2,
      title: 'Tarea Iniciada'
    }
  ];

  acciones = [
    {
      id: 1,
      title: 'Tareas',
      button: 'Agregar nueva tarea',
      campo: 'titleTask'
    }
  ];

  statusSeleccionado: string = ''; 

  tasks : Array<Tasks> = [
    {
      id: 1,
      displayText: 'Tarea inicial',
      status: 1
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  execAction(accion : any) 
  {
    if (accion === 1)
      this.newTask();
    if (accion === 2)
      this.newPanel();
  }

  newPanel()
  {
    const lastId = this.panels.map(element => element.id),
    newId = Math.max(...lastId) + 1,
    newPanelName = (<HTMLInputElement>document.getElementById("2")).value;

    if (newPanelName != '')
    {
      this.panels.push(
        {
          id: newId,
          title: newPanelName
        }
      );
      (<HTMLInputElement>document.getElementById("2")).value = '';
    }
  }

  newTask()
  {
    const lastId = this.tasks.map(element => element.id),
    newId = Math.max(...lastId) + 1,
    newTaskName = (<HTMLInputElement>document.getElementById("1")).value;
    
    if (newTaskName != '')
    {
      this.tasks.push(
        {
          id: newId,
          displayText: newTaskName,
          status: 1
        }
      );

      (<HTMLInputElement>document.getElementById("1")).value = '';
    }
  }

  changeTaskStatus()
  {
    const splitted = this.statusSeleccionado.split('_'),
    idTask = Number(splitted[0]),
    idPanel= Number(splitted[1]);

    const tasks = this.tasks.map(element => {      
      if (idTask == element.id)
        element.status = idPanel;      
    });
  }
}