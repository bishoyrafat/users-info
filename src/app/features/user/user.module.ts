import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MainViewComponent } from './main-view/main-view.component';
import { CoreModule } from 'src/app/core/core.module';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MainViewComponent, UserComponent],
  imports: [CommonModule, UserRoutingModule, CoreModule, HttpClientModule,SharedModule],
  exports: [MainViewComponent],
})
export class UserModule {}
