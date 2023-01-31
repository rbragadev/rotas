import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

//import { NaoEncontradoComponent } from './cursos/nao-encontrado/nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,

    // CursosComponent,
    // CursoDetalheComponent,
    // NaoEncontradoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  //providers: [CursosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
