import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
  declarations: [
    LayoutComponent,
    TopBarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
