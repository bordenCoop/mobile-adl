import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuickdrawPage } from '../quickdraw/quickdraw';
import { TeachablemachinePage } from '../teachablemachine/teachablemachine';
import { AutodrawPage } from '../autodraw/autodraw';
import { SketchrnnPage } from '../sketchrnn/sketchrnn';

@Component({
  selector: 'page-ai',
  templateUrl: 'ai.html'
})
export class AiPage {
      quickdraw: any;
      teachablemachine: any;
      autodraw: any;
      sketchrnn: any;


  constructor(public navCtrl: NavController) {
    this.quickdraw = QuickdrawPage;
    this.teachablemachine = TeachablemachinePage;
    this.autodraw = AutodrawPage;
    this.sketchrnn = SketchrnnPage;

  }

}
