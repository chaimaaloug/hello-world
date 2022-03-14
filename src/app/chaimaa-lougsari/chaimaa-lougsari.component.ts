import { Component, OnInit } from '@angular/core';
import {ChaimaaService} from '../services/chaimaa.service'

@Component({
  selector: 'app-chaimaa-lougsari',
  templateUrl: './chaimaa-lougsari.component.html',
  styleUrls: ['./chaimaa-lougsari.component.scss']
})
export class ChaimaaLougsariComponent implements OnInit {
   
  // ajout des variables
  prenom : string = "chaimaa";
  totos : string[] = ["chaima", "chaima"];
  nom : string;
 
  constructor(private  _ChaimaaService:ChaimaaService ) { 
    
  }

  ngOnInit(): void {
     this.nom = this._ChaimaaService.getNom();

  }

}
