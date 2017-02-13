import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { FormsModule }   from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';

import { AY3App } from './app.component';


@NgModule({
  declarations: [
    AY3App
  ],
  imports: [
    IonicModule.forRoot(AY3App),
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AY3App
  ],
  providers: [
    Storage
  ]
})
export class AppModule {}
