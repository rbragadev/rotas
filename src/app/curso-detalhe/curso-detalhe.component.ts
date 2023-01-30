import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent implements OnInit {
  id!: string;
  inscricao!: Subscription;

  constructor(private route: ActivatedRoute) {
    // Aula 53 : Forma 1 de pegar dados da rota
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route)
  }

  ngOnInit(): void {
    // Aula 54: Forma 2 de pegar dados da rota
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }

  // Aula 54: Forma 2 de pegar dados da rota
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
