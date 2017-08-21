import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category } from '../../data/category';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  categories: Category[];
  quotesPage = QuotesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
   this.categories = quotes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  onLoadCategory(category: Category) {
    this.navCtrl.push(this.quotesPage, category)
  }

}
