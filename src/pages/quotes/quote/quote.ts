import { Component, OnInit } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Quote } from '../../../data/quote';
import { QuotesService } from '../../../service/quotes.service';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit {
  quote: Quote;
  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              private quotesService: QuotesService) {}

  ngOnInit() {
    this.quote = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove); // deletes the page! make sure there is something else in the stack!
  }

  onUnfavorite() {
    // this.quotesService.removeQuoteFromFavorites(this.quote);
    this.onClose(true);
  }

}
