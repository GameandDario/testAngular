import { Component, OnInit, Input } from '@angular/core';
import { CloudSnap } from '../models/cloud-face-models';

@Component({
  selector: 'app-cloud-snap',
  templateUrl: './cloud-snap.component.html',
  styleUrls: ['./cloud-snap.component.scss'],
})
export class CloudSnapComponent implements OnInit {
  @Input() cloudSnap!: CloudSnap;

  title!: string;
  description!: string;
  imageUrl!: string;
  season!: string;
  snaps!: number;
  snapped!: boolean;
  btnMsg!: string;
  location?: string;

  ngOnInit() {
    this.snapped = false;
    this.btnMsg = 'Oh Snaps !';
  }
  onAddSnap() {
    if (this.snapped == false) {
      this.cloudSnap.snaps++;
      this.snapped = true;
      this.btnMsg = 'You did it ';
    } else if (this.snapped) {
      this.cloudSnap.snaps--;
      this.btnMsg = 'Re-initialized ! You can re-Snap this cloud ';
      this.snapped = false;
    }
  }
}
