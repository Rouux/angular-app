import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { TextAnimatedButtonComponent } from './text-animated-button/text-animated-button.component';

@NgModule({
  declarations: [TextAnimatedButtonComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TextAnimatedButtonComponent],
  providers: [],
})
export class ComponentsModule {}
