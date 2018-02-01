import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WillitworkonlinePage } from '../willitworkonline/willitworkonline';
import { ConnectwithhajikamalPage } from '../connectwithhajikamal/connectwithhajikamal';

@Component({
  selector: 'page-elearning',
  templateUrl: 'elearning.html'
})
export class ElearningPage {
  willitworkonline: any;
  connectwithhajikamal: any;

  constructor(public navCtrl: NavController) {
    this.willitworkonline = WillitworkonlinePage;
    this.connectwithhajikamal = ConnectwithhajikamalPage;
  }

}
