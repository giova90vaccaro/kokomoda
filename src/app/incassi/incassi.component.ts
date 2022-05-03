import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-incassi',
  templateUrl: './incassi.component.html',
  styleUrls: ['./incassi.component.css']
})
export class IncassiComponent implements OnInit {

corpo=false;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  dataSource!:any;
  intestazione = ['Giorno', 'DD','Totale', 'PercTotale', 'Npezzi', 'PercPz', 'Nconti', 'PercConti']

  constructor(private api:HttpClient) { }

  ngOnInit(): void {
  }

  updateCalcs(){
    console.log("inseriemnto data");
    console.log(this.range.value.start.toLocaleDateString("it-IT"));

    this.api.get("https://cvggold-dash.ns0.it/desktestgh/KokoModa/desk/storico/incassi.php?d1="+this.range.value.start.toLocaleDateString("it-IT")+"&d2="+this.range.value.end.toLocaleDateString("it-IT")).subscribe(
      data=>{
       this.corpo = false
       this.dataSource = data
       this.corpo = true;
      }
    )


  }

}
