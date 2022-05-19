import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap-models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  /* 4/ Ajout d'un décorateur Input pour injecter une prooriété depuis un parent. FaceSnap est importé */
  @Input() faceSnap!: FaceSnap;

  /* 1/ Déclaration propriétés de classe component */
  /* ajout d'un ! derrière chaque propriété comme promesse qu'elle sera initialisée */
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  btnMsg!: string;
  imageUrl!: string;
  snapped!: boolean;

  /* 2/ Initialisation avec méthode ngOnInit et interface OnInit appelée depuis @angular/core et implementée dans le component*/
  ngOnInit() {
    this.title = 'Mon Lapin';
    this.description = 'Un compagnon de tout une vie';
    this.createdDate = new Date();
    this.snaps = 6;
    this.snapped = false;
    this.btnMsg = 'Oh Snaps !';
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  /* 3/ Création d'une méthode qui incrémnente la valeur de variable snaps */
  onAddSnap() {
    if (this.snapped == false) {
      this.faceSnap.snaps++;
      this.snapped = true;
      this.btnMsg = 'You did it ';
    } else if (this.snapped) {
      this.faceSnap.snaps--;
      this.btnMsg = 'Re-initialized ! You can re-Snap ';
      this.snapped = false;
    }
  }
}
