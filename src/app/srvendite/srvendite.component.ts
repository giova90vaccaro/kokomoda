import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-srvendite',
  templateUrl: './srvendite.component.html',
  styleUrls: ['./srvendite.component.css']
})
export class SrvenditeComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  show = false;
  dataSource!:any
  displayedColumns = ['Categoria', 'Prodotto', 'Qta', 'Perc','prezzo', 'Valore'];

  constructor(private api:HttpClient) { }

  ngOnInit(): void {
  }

  updateCalcs(){
    console.log("inseriemnto data;")

    this.api.get("https://cvggold-dash.ns0.it/desktestgh/KokoModa/desk/storico/articoli.php?d1="+this.range.value.start.toLocaleDateString("it-IT")+"&d2="+this.range.value.end.toLocaleDateString("it-IT")).subscribe(
      data=>{
        console.log(data)
        this.dataSource = data;
        this.show = true
      }
    )

  }
}
