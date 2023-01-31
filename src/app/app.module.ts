import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlunosModule } from './alunos/alunos.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';
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
  imports: [BrowserModule, AppRoutingModule, CursosModule, AlunosModule],
  //providers: [CursosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
