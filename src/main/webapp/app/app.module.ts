import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jh680TestSharedModule } from 'app/shared/shared.module';
import { Jh680TestCoreModule } from 'app/core/core.module';
import { Jh680TestAppRoutingModule } from './app-routing.module';
import { Jh680TestHomeModule } from './home/home.module';
import { Jh680TestEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jh680TestSharedModule,
    Jh680TestCoreModule,
    Jh680TestHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jh680TestEntityModule,
    Jh680TestAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Jh680TestAppModule {}
