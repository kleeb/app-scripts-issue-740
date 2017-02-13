import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';



@Component({
  template: 'aa'
})
export class AY3App {

    constructor(
        private platform: Platform) {
            this.initializeApp();
    }

    private initializeApp() {
        this.platform.ready().then(() => {
            console.log('init app ');
        });
    }


}
