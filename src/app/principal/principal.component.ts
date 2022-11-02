import { Component, OnInit } from '@angular/core';

interface Medidas {
  altura: number;
  peso: number;
}

interface Resultado {
  resultadoImc: number;
  classificacaoImc: string;
  obesidade: string;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}