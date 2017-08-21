import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoriteQuotesPage } from './favorite-quotes';

@NgModule({
  declarations: [
    FavoriteQuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoriteQuotesPage),
  ],
})
export class FavoriteQuotesPageModule {}
