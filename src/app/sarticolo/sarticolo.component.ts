import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sarticolo',
  templateUrl: './sarticolo.component.html',
  styleUrls: ['./sarticolo.component.css']
})
export class SarticoloComponent implements OnInit {

  corpo:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  searchItems(it:String):void{
      if(it){
        console.log(it);
        this.corpo = true;
      }else{
        console.log("Errore di inserimento")
      }
        
  }

}
