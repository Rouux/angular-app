import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../layout/layout.module';

import { ManualComponent } from './manual/manual.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    ManualComponent,
    HomeComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
