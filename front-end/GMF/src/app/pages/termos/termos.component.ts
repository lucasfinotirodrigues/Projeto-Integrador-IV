import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-termos',
  templateUrl: './termos.component.html',
  styleUrls: ['./termos.component.scss']
})
export class TermosComponent {
  constructor(
    private sanitizer: DomSanitizer
  ) {}

  disciplinas = [
    {img: '../../../assets/materia1.svg', disciplina: 'Algoritmos Avançados'},
    {img: '../../../assets/materia2.svg', disciplina: 'Empreendedorismo'},
    {img: '../../../assets/materia3.svg', disciplina: 'Manejos Agrícolas de Tratos Culturais e Colheita'}
  ]

  disciplinasDois = [
    {img: '../../../assets/materia4.svg', disciplina: 'Web Semântica'},
    {img: '../../../assets/materia5.svg', disciplina: 'Redes de Computadores'},
    {img: '../../../assets/materia6.svg', disciplina: 'Projeto Integrador IV'}
  ]

  getBackgroundImage(imagePath: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${imagePath}')`);
  }
}