import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { TextAnimatedButtonComponent } from './text-animated-button/text-animated-button.component';
import { AnimateDivTextService } from '../services/animate-div-text.service';

@NgModule({
  declarations: [TextAnimatedButtonComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TextAnimatedButtonComponent],
  providers: [AnimateDivTextService],
})
export class ComponentsModule {}
