import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  categoria!:any;
  lastseven!:any;
  today23!:any;
  mese11!:any;
  articoli!:any;

  title!:any;
  type!:any;
  data1!:any;

  righe!:any;
  righealt!:any;

  title2!:any;
  type2!:any;
  data3!:any;

  title3!:any;
  type3!:any;
  data4!:any;

  righe2!:any;
  righealt2!:any;
  righe3!:any;
  righealt3!:any;
  options!:any;
  options3!:any;

  inttabella:string[]=['cat','nome','qta','valore'];
  col:string[]=['Giorno','Incasso'];
  columns!:any;

  col3:string[]=['Giorno','Incasso'];
  columns3!:any;
  bar!:any;
  show=false;
  show2=false;
  show3=false;

  chartHeight = 0
  chartHeight2 = 0;
  chartWidth = 0

  constructor(private api:HttpClient,private api2:HttpClient, private mese:HttpClient, private art:HttpClient) {
    this.api.get("https://cvggold-dash.ns0.it/desktestgh/KokoModa/desk/andamento/index.php").subscribe(
      data=>{

        this.righe=[];
        this.righealt = [];
        this.categoria = data;
          var i:number
          for(i=0; i<this.categoria.length; i++){
              var aux = [this.categoria[i].Categoria, Number(this.categoria[i].Valore)];
              this.righe.push(aux);
            }
              this.title = "Categoria"
              this.type = ChartType.PieChart
              this.data1 = this.righe

            this.show=true;

      }
    )

    this.api.get("https://cvggold-dash.ns0.it/desktestgh/KokoModa/desk/andamento/lastseven.php").subscribe(
      data=>{
        console.log(data);

        this.righe2=[];
        this.righealt2 = [];
        this.lastseven=data;
        var i:number
          for(i=0; i<this.lastseven.length; i++){
              var aux2 = [this.lastseven[i].Data, Number(this.lastseven[i].Totale)];
              var y2 = [this.lastseven[i].Giorno, Number(this.lastseven[i].Scontrini), Number(this.lastseven[i].Pezzi)];
              this.righealt2.push(y2)
              this.righe2.push(aux2);
            }
              this.title2 = "Andamento Incassi"
              this.type2 = ChartType.ComboChart
              this.columns = this.col
              this.data3 = this.righe2
              this.options= {
                vAxis: { title: '€' },
                hAxis: { title: 'Giorni' }
              }
              this.bar = false
              this.show2 = true;
            }
    )

    this.api2.get("https://cvggold-dash.ns0.it/desktestgh/KokoModa/desk/andamento/today.php").subscribe(
      data=>{
        this.today23 = data;
      }
    )

    this.mese.get("https://cvggold-dash.ns0.it/desktestgh/KokoModa/desk/andamento/month.php").subscribe(
        data =>{
        this.mese11 = data
        this.righe3=[];
      this.righealt3 = [];
      var i:number
        for(i=0; i<this.mese11.length; i++){
          var aux = [this.mese11[i].mese, Number(this.mese11[i].Totale) ]
          var y = [this.mese11[i].mese, Number(this.mese11[i].NScontrini)]
          this.righe3.push(aux)
          this.righealt3.push(y)
        }
        this.title3= 'Fascia Oraria'
        this.type3= ChartType.Bar
        this.columns3 = this.col3

        this.data4 = this.righe3
        this.options3={
          chart: {
            title: "Andamento FasciaOraria da",
            subtitle: 'Totale Scontrinato - Numero di Pezzi'
          }
        }
        this.show3 = true;
      }
    )
    this.art.get("https://cvggold-dash.ns0.it/desktestgh/KokoModa/desk/andamento/articoli.php").subscribe(
      data=>{
        console.log(data)
        this.articoli = data;
      }
    )

   }

  ngOnInit(): void {
/*
    if(window.innerWidth>750){
      this.chartWidth=window.innerWidth * 0.43
      this.chartHeight= window.innerHeight * 0.3
      this.chartHeight2= window.innerHeight * 0.14


    }else{
      this.chartWidth=window.innerWidth * 0.90
      this.chartHeight= window.innerHeight * 0.4
      this.chartHeight2= window.innerHeight * 0.2

    }*/

  }

}
