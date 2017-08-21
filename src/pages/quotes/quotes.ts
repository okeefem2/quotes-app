import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Category } from '../../data/category';
import { Quote } from '../../data/quote';
import { QuotesService } from '../../service/quotes.service'

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  category: Category;
  constructor(private navParams: NavParams,
              private alertCtrl: AlertController,
              private quotesService: QuotesService) {
  }
  //
  // // fetch on template rendering
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad QuotesPage');
  //   this.category = this.navParams.data;
  // }
  // needs the elvis operator (?) ^

  // fetch on component creation
  ngOnInit() {
    console.log(this.navParams.data);
    this.category = this.navParams.data;
  }

  onFavorite(selectedQuote: Quote) {
    // cancel role executes whenever the modal is dismissed, clicking outside counts!
    const confirmFavoriteAlert = this.alertCtrl.create({
      title: 'Favorite Quote',
      message: 'Are you sure you want to favorite this quote?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            console.log('confirmed');
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('cancelled');
          },
          role: 'cancel'
        }
    ]
    });
    confirmFavoriteAlert.present();
  }

  onUnfavorite(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

}
