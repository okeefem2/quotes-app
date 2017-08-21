import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FavoriteQuotesPage } from '../favorite-quotes/favorite-quotes';
import { LibraryPage } from '../library/library';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  favoriteQuotesPage = FavoriteQuotesPage;
  libraryPage = LibraryPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
