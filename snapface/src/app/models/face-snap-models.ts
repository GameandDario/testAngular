/* version sans raccourci  */
/* export class FaceSnap {
  title: string;
  description: string;
  createdDate: Date;
  snaps: number;
  imageUrl: string;
  snapped: boolean;

  constructor(
    title: string,
    description: string,
    createdDate: Date,
    snaps: number,
    imageUrl: string,
    snapped: boolean
  ) {
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.snaps = snaps;
    this.imageUrl = imageUrl;
    this.snapped = snapped;
  }
} */

/* version avec raccourci : utilisation de public qui permet de supprimer déclarations et initialisations */
/* Ajout d'une propriété sous condition grâce au ? */
export class FaceSnap {
  constructor(
    public title: string,
    public description: string,
    public createdDate: Date,
    public snaps: number,
    public imageUrl: string,
    public location?: string
  ) {}
}
