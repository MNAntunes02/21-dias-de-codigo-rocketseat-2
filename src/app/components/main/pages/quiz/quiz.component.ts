import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit , AfterViewInit {

  faCircleXmark = faCircleXmark;
  faCircleCheck = faCircleCheck;

  pergunta: string = "Pergunta feita como exemplo?"
  // opcao01: string = "Opção 01";
  // opcao02: string = "Opção 02";
  // opcao03: string = "Opção 03";

  // @ViewChildren('opc') opc = QueryList<any>;

  cont = 0;
  resposta = "";
  escolheu: boolean = false;

  arr = [
    [
      {
        pergunta: "Em que framework/biblioteca essa aplicação foi desenvolvida?"
      },
      {
        nome: "Angular",
        certa: true
      },
      {
        nome: "React",
        certa: false
      },
      {
        nome: "Vue",
        certa: false
      },
    ],
    [
      {
        pergunta: "O que fazer enquanto almoça?"
      },
      {
        nome: "Jogar um jogo",
        certa: false
      },
      {
        nome: "Assistir uma série ou filme",
        certa: false
      },
      {
        nome: "Acompanhar o Marmitech",
        certa: true
      },
    ],
    [
      {
        pergunta: "Em qual periodo será realizado o NLW eSports?"
      },
      {
        nome: "02 a 09 de outubro",
        certa: false
      },
      {
        nome: "11 a 18 de setembro",
        certa: true
      },
      {
        nome: "19 a 26 de setembro",
        certa: false
      },
    ]
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    
  }

  escolha(opcaoCorreta: any){
    this.escolheu = true;

    opcaoCorreta ? this.resposta = "CERTA RESPOSTA!!" : this.resposta ="RESPOSTA ERRADA";

    console.log(opcaoCorreta);
    console.log(this.resposta);
  }

  nextQuestion(){
    this.cont++;
    this.escolheu = false;
    console.log(this.cont);
  }


  backQuestion(){
    this.cont--;
    this.escolheu = false;
  }

}
