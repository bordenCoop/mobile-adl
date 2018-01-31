import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ActivitiesPage } from '../pages/Activities/activities';
import { IntroductionPage } from '../pages/introduction/introduction';
import { ElearningPage } from '../pages/elearning/elearning';
import { WebvrPage } from '../pages/webvr/webvr';
import { MobilePage } from '../pages/mobile/mobile';
import { LearningtheoryPage } from '../pages/learningtheory/learningtheory';
import { LearningAnalyticsPage } from '../pages/learninganalytics/learninganalytics';
import { TlaPage } from '../pages/tla/tla';
import { AiPage } from '../pages/ai/ai';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ActivitiesPage,
    IntroductionPage,
    ElearningPage,
    WebvrPage,
    MobilePage,
    LearningtheoryPage,
    LearningAnalyticsPage,
    TlaPage,
    AiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActivitiesPage,
    IntroductionPage,
    ElearningPage,
    WebvrPage,
    MobilePage,
    LearningtheoryPage,
    LearningAnalyticsPage,
    TlaPage,
    AiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
