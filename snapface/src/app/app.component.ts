import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /* 1/ Déclarer la propriété dans un nouvel objet mySnap*/
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  /* 2/Initialiser une instance de FaceSnap */
  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Zozo',
      'Super singe',
      new Date(),
      4,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    );
    this.myOtherSnap = new FaceSnap(
      'Gros Lapin',
      "Un ami d'enfance",
      new Date(),
      3,
      'https://images.unsplash.com/photo-1652489230911-702248f19631?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764'
    );
    this.myLastSnap = new FaceSnap(
      'Gontran Caïmas',
      'On avait trop mangé ce soir-là',
      new Date(),
      5,
      'https://images.unsplash.com/photo-1646956324647-9fc58bd803b7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1199'
    );
  }
}
