import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  /* 1/ Déclaration propriétés de classe component */
  /* ajout d'un ! derrière chaque propriété comme promesse qu'elle sera initialisée */
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;

  /* 2/ Initialisation avec méthode ngOnInit et interface OnInit appelée depuis @angular/core et implementée dans le component*/
  ngOnInit() {
    this.title = 'Mon Lapin';
    this.description = 'Un compagnon de tout une vie';
    this.createdDate = new Date();
    this.snaps = 6;
  }
}