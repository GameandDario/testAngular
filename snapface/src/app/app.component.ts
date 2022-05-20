import { Component, OnInit } from '@angular/core';
import { CloudSnap } from './models/cloud-face-models';
import { FaceSnap } from './models/face-snap-models';
import { SeaSnap } from './models/sea-snap-models';

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

  myCloud!: CloudSnap;
  my2Cloud!: CloudSnap;

  mySea!: SeaSnap;
  mySea2!: SeaSnap;
  mySea3!: SeaSnap;

  mySeas = [
    {
      title: 'Mer',
      description: 'Mer tropicale',
      imageUrl:
        'https://images.unsplash.com/photo-1439405326854-014607f694d7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
      season: 'Printemps',
      snaps: 5,
      location: 'Mexique',
    },
    {
      title: 'Mer',
      description: 'Mon île',
      imageUrl:
        'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173',
      season: 'Hiver',
      snaps: 5,
      location: 'Thaïlande',
    },
    {
      title: 'Océan Atlantique',
      description: 'Mer calme',
      imageUrl:
        'https://images.unsplash.com/photo-1457195740896-7f345efef228?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
      season: 'Printemps',
      snaps: 5,
      location: "Large de l'Écosse",
    },
  ];

  /* 2/Initialiser une instance de FaceSnap */
  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Zozo',
      'Super singe',
      new Date(),
      4,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      'Paris'
    );
    this.myOtherSnap = new FaceSnap(
      'Gros Lapin',
      "Un ami d'enfance",
      new Date(),
      3,
      'https://images.unsplash.com/photo-1652489230911-702248f19631?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764',
      'Paris'
    );
    this.myLastSnap = new FaceSnap(
      'Gontran Caïmas',
      'On avait trop mangé ce soir-là',
      new Date(),
      5,
      'https://images.unsplash.com/photo-1646956324647-9fc58bd803b7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1199'
    );
    /* Ici appel instance sans constructeur */
    this.myCloud = {
      title: 'RR',
      description: 'Un nuage',
      imageUrl:
        'https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179',
      season: 'Été',
      snaps: 3,
      location: 'Toulouse',
    };
    this.my2Cloud = {
      title: 'Nom du nuage',
      description: 'Un nuage2',
      imageUrl:
        'https://images.unsplash.com/photo-1504253163759-c23fccaebb55?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
      season: 'Printemps',
      snaps: 5,
      location: 'Nancy',
    };
  }
}
