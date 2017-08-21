import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { QuotesService } from '../../service/quotes.service';
import { SettingsService } from '../../service/settings.service';
import { Quote } from '../../data/quote';
import { QuotePage } from '../quotes/quote/quote';

@IonicPage()
@Component({
  selector: 'page-favorite-quotes',
  templateUrl: 'favorite-quotes.html',
})
export class FavoriteQuotesPage implements OnInit {
  quotes: Quote[];
  altBackground: boolean;

  constructor(private quotesService: QuotesService,
              private modalCtrl: ModalController,
              private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.quotes = this.quotesService.getFavoriteQuotes();
    this.quotesService.favoritesChanged.subscribe(
      (quotes: Quote[]) => {
        this.quotes = quotes;
      }
    );
    this.altBackground = this.settingsService.checkAltBackGround();
    this.settingsService.backGroundChanged.subscribe(
      (alt: boolean) => {

      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoriteQuotesPage');
  }

  // get the favorite quotes every time page displayed
  // another approach would be to get the fav quotes in ngOnInit
  // and then also create a subscription to a subject in the quotesService
  // in that subject, every time fav quotes is updated, you emit and this component
  // will act accordingly.
  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    console.log('quote!');
    console.log(quote);
    // create modal!
    const quoteModal = this.modalCtrl.create(QuotePage, quote);
    quoteModal.present();
    // to get data from the modal when dismissed
    quoteModal.onDidDismiss((remove: boolean) => {
      console.log(remove);
      if (remove) {
        this.quotesService.removeQuoteFromFavorites(quote);
        // this.quotes = this.quotesService.getFavoriteQuotes();
      }
    });
  }

  onRemove(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  getBackground() {
    return this.altBackground ? 'altBackground' : 'quoteBackground';
  }

  isAltBackground() {
    return this.altBackground;
  }

}
