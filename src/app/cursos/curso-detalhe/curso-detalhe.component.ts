import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent implements OnInit {
  id!: number;
  inscricao!: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) {
    // Aula 53 : Forma 1 de pegar dados da rota
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route)
  }

  ngOnInit(): void {
    // Aula 54: Forma 2 de pegar dados da rota
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.curso = this.cursosService.getCurso(this.id);

      if (this.curso === null) {
        this.router.navigate(['/cursos/naoEncontrado']);
      }
    });
  }

  // Aula 54: Forma 2 de pegar dados da rota
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
