import { Component, OnInit, Input } from '@angular/core';
import { SeaSnap } from '../models/sea-snap-models';

@Component({
  selector: 'app-sea-snap',
  templateUrl: './sea-snap.component.html',
  styleUrls: ['./sea-snap.component.scss'],
})
export class SeaSnapComponent implements OnInit {
  @Input() seaSnap!: SeaSnap;
  title!: string;
  description!: string;
  imageUrl!: string;
  season!: string;
  snaps!: number;
  location?: string;
  snapped!: boolean;
  btnMsg!: string;

  ngOnInit() {
    this.snapped = false;
    this.btnMsg = 'Oh what a beauty !';
  }
  onAddSnap() {
    if (this.snapped == false) {
      this.seaSnap.snaps++;
      this.snapped = true;
      this.btnMsg = 'You did it ';
    } else if (this.snapped) {
      this.seaSnap.snaps--;
      this.btnMsg = 'Re-initialized ! You can re-Snap this sea ';
      this.snapped = false;
    }
  }
}
