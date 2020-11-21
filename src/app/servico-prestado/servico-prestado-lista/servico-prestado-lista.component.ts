import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {
  meses = [
    {
      nome: "Janeiro",
      numero: 1,
    },
    {
      nome: "Fevereiro",
      numero: 2,
    },
    {
      nome: "Março",
      numero: 3,
    },
    {
      nome: "Abril",
      numero: 4,
    },
    {
      nome: "Maio",
      numero: 5,
    },
    {
      nome: "Junho",
      numero: 6,
    },
    {
      nome: "Julho",
      numero: 7,
    },
    {
      nome: "Agosto",
      numero: 8,
    },
    {
      nome: "Setembro",
      numero: 9,
    },
    {
      nome: "Outubro",
      numero: 10,
    },
    {
      nome: "Novembro",
      numero: 11,
    },
    {
      nome: "Dezembro",
      numero: 12,
    },
  ]

  nome: string;
  mes: number;

  constructor(private servicoPrestadoService: ServicoPrestadoService) { }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.nome,this.mes);
    this.servicoPrestadoService.buscar(this.nome, this.mes)
      .subscribe(
        res => console.log(res)
      )
  }

}
