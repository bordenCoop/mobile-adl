import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivitiesPage } from '../Activities/activities';
import { IntroductionPage } from '../introduction/introduction';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Activities: any;
  introduction: any;

  constructor(public navCtrl: NavController) {
    this.Activities = ActivitiesPage;
    this.introduction = IntroductionPage;
  }

}
