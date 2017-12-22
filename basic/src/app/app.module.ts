import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template/template.component';
import { TopNavComponent } from './template/top-nav/top-nav.component';
import { FooterComponent } from './template/footer/footer.component';
import { AsideMenuComponent } from './template/aside-menu/aside-menu.component';
import { ErrorComponent } from './error/error.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TopNavComponent,
    FooterComponent,
    AsideMenuComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
