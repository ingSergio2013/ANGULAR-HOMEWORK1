import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { BulletComponent } from './bullet/bullet.component';
import { AccionesComponent } from './acciones/acciones.component';
import { TitlesComponent } from './titles/titles.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    PanelComponent,
    BulletComponent,
    AccionesComponent,
    TitlesComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent,
    BulletComponent,
    AccionesComponent,
    TitlesComponent,
    ButtonComponent
  ]
})
export class ControlsModule { }
