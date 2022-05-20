import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { CloudSnapComponent } from './cloud-snap/cloud-snap.component';
import { SeaSnapComponent } from './sea-snap/sea-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    CloudSnapComponent,
    SeaSnapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
