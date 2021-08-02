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
      title: 'Sin Catalogar',
      button: 'Eliminar'
    },
    {
      id: 2,
      title: 'Iniciadas',
      button: 'Eliminar'
    }
  ];

  acciones = [
    {
      id: 1,   
      title:'',
      button: 'Agregar nueva tarea',
      campo: 'titleTask'
    },
    {
      id: 2,
      title:'',
      button: 'Agregar nueva columna',
      campo: 'titlePanel'
    }
  ];

  statusSeleccionado: string = ''; 

  tasks : Array<Tasks> = [
    {
      id: 1,
      displayText: 'Tarea inicial',
      status: 1,
      button:'Eliminar'
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
      if (accion === 3)
      this.DelTask(accion);
  }

  DelTask(id : any)
  {
    
    if (id==1)
    {
      console.log('No se puede eliminar una Tarea sin catalogar');
    }
    else
    {
      console.log('Panel a Eliminar', id);
      this.panels.pop()?.id;
    }
     
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
          title: newPanelName,
          button:'Eliminar'
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
          status: 1,
          button :'Eliminar'
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