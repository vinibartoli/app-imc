import { PrimeNGModule } from './primeng.module';
import { Component } from '@angular/core';
import { NgForm, NonNullableFormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';


// criar o modelo de calculo e resultado tipado

interface CalculoModel {
  peso: number;
  altura: number;
}

interface Result {
  imc: number;
  classificacao: string;
  grauObesidade: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app-imc';

  // pré definir a interface CalculoModel com o valor inicial de 0

  model: CalculoModel = {
    altura: 0,
    peso: 0
}

  result: any;

  constructor() {}

  onsubmit(form: NgForm){
    if (this.model.peso <= 0 && this.model.altura <= 0) {
      return;
}

  // Instanciar os metodos

  const imc = this.calculaImc(this.model.peso, this.model.altura);
  const classificacao = this.getClassificacao(imc);
  const grauObesidade = this.getGrauObesidade(imc);

  this.result = {
    imc,
    classificacao,
    grauObesidade
  }
}

// criando os metodos

calculaImc(peso: number, altura: number) {
   return peso / (altura * altura);
}

getClassificacao(imc: number) {
  if (imc <= 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc <= 24.9) {
    return 'Peso ideal';
  } else if (imc >= 25 && imc <= 29.9) {
    return 'Levemente acima do peso';
  } else if (imc >= 35 && imc <= 39.9) {
    return 'Obesidade (severa)';
  } else {
    return 'Obesidade (mórbida)';
  }
}

  getGrauObesidade(imc: number) {
  if (imc <= 18.5) {
  return '0';
  } else if (imc >= 18.5 && imc <= 24.9) {
  return '0';
  } else if (imc >= 25 && imc <= 29.9) {
  return 'I';
  } else if (imc >= 30 && imc <= 34.9) {
  return 'II';
  } else {
  return 'III';
}
}
}