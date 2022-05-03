import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sarticolo',
  templateUrl: './sarticolo.component.html',
  styleUrls: ['./sarticolo.component.css']
})
export class SarticoloComponent implements OnInit {

  corpo:boolean=false;
  corpo2:boolean=false;
  art!:any;
  valori!:any;
  constructor(private api:HttpClient, private venduti:HttpClient) { }

  ngOnInit(): void {
  }

  searchItems(it:String):void{
      if(it){
        console.log(it);
          this.api.get("https://cvggold-dash.ns0.it/desktestgh/KokoModa/desk/item/items.php?id="+it).subscribe(
            data=>{
             this.corpo = false
              this.art = data;
              this.corpo = true;
            }
          )
          this.venduti.get("https://cvggold-dash.ns0.it/desktestgh/KokoModa/desk/item/Venditeit.php?id="+it).subscribe(
            data=>{
              this.corpo2 = false
              console.log(data)
              this.valori = data
              this.corpo2 = true
            }
          )

      }else{
        console.log("Errore di inserimento")
      }

  }

}
