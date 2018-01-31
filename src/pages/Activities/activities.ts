import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElearningPage } from '../elearning/elearning';
import { WebvrPage } from '../webvr/webvr';
import { MobilePage } from '../mobile/mobile';
import { LearningtheoryPage } from '../learningtheory/learningtheory';
import { LearningAnalyticsPage } from '../learninganalytics/learninganalytics';
import { TlaPage } from '../tla/tla';
import { AiPage } from '../ai/ai';

@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html'
})
export class ActivitiesPage {
    elearning: any;
    webvr: any;
    mobile: any;
    learningtheory: any;
    learninganalytics: any;
    tla: any;
    ai: any;

  constructor(public navCtrl: NavController) {
    this.elearning = ElearningPage;
    this.webvr = WebvrPage;
    this.mobile = MobilePage;
    this.learningtheory = LearningtheoryPage;
    this.learninganalytics = LearningAnalyticsPage;
    this.tla = TlaPage;
    this.ai = AiPage;

  }

}
