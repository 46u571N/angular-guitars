import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { GuitarDataService } from '../guitar-data.service';
import { Guitar } from './guitar';

@Component({
  selector: 'guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.scss']
})
export class GuitarListComponent implements OnInit {
  
    guitars: Guitar[] = [];
    
  /*  [{
      name: "Egc124",
      description: "electro-nylon",
      price: 11000,
      brand: "takamine",
      image: "",
      clearance: false,
     
    },
    {
      name: "Egc124",
      description: "electro-nylon",
      price: 11000,
      brand: "takamine",
      image: "",
      clearance: false,
    },
    {
      name: "Egc124",
      description: "electro-nylon",
      price: 11000,
      brand: "takamine",
      image: "",
      clearance: false,
    }
    ]
*/
  constructor(private guitarsDataService : GuitarDataService ) { }

  ngOnInit(): void {
    this.guitarsDataService.getAll().subscribe(guitars => this.guitars = guitars );
  }

}
