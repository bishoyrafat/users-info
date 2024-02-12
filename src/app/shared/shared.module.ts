import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextLimitPipe } from './pipes/text-limit.pipe';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [TextLimitPipe,LoaderComponent],
  imports: [
    CommonModule
  ],
  exports:[TextLimitPipe,LoaderComponent]
})
export class SharedModule { }
