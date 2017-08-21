import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoriteQuotesPage } from '../pages/favorite-quotes/favorite-quotes';
import { LibraryPage } from '../pages/library/library';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotePage } from '../pages/quotes/quote/quote';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { QuotesService } from '../service/quotes.service';
import { SettingsService } from '../service/settings.service';

@NgModule({
  declarations: [
    MyApp,
    FavoriteQuotesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoriteQuotesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService
  ]
})
export class AppModule {}
