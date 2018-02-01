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
import { WillitworkonlinePage } from '../pages/willitworkonline/willitworkonline';
import { ConnectwithhajikamalPage } from '../pages/connectwithhajikamal/connectwithhajikamal';
import { BrilliantPage } from '../pages/brilliant/brilliant';
import { AugmentPage } from '../pages/augment/augment';
import { RespectincafPage } from '../pages/respectincaf/respectincaf';
import { QuickdrawPage } from '../pages/quickdraw/quickdraw';
import { TeachablemachinePage } from '../pages/teachablemachine/teachablemachine';
import { AutodrawPage } from '../pages/autodraw/autodraw';
import { SketchrnnPage } from '../pages/sketchrnn/sketchrnn';


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
    AiPage,
    WillitworkonlinePage,
    ConnectwithhajikamalPage,
    BrilliantPage,
    AugmentPage,
    RespectincafPage,
    QuickdrawPage,
    TeachablemachinePage,
    AutodrawPage,
    SketchrnnPage
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
    AiPage,
    WillitworkonlinePage,
    ConnectwithhajikamalPage,
    BrilliantPage,
    AugmentPage,
    RespectincafPage,
    QuickdrawPage,
    TeachablemachinePage,
    AutodrawPage,
    SketchrnnPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
