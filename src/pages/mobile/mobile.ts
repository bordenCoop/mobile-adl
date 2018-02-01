import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrilliantPage } from '../brilliant/brilliant';
import { AugmentPage } from '../augment/augment';
import { RespectincafPage } from '../respectincaf/respectincaf';

@Component({
  selector: 'page-mobile',
  templateUrl: 'mobile.html'
})
export class MobilePage {
    brilliant: any;
    augment: any;
    respectincaf: any;

  constructor(public navCtrl: NavController) {
    this.brilliant = BrilliantPage;
    this.augment = AugmentPage;
    this.respectincaf = RespectincafPage;
  }

}
