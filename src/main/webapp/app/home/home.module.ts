import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jh680TestSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jh680TestSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Jh680TestHomeModule {}
