import { Quote } from '../data/quote';
import { Subject } from 'rxjs/Subject';

export class QuotesService {
  private favoriteQuotes: Quote[] = [];
  favoritesChanged = new Subject<Quote[]>();

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    this.favoritesChanged.next(this.getFavoriteQuotes());
  }

  removeQuoteFromFavorites(quote: Quote) {
    const index = this.favoriteQuotes.findIndex((favoriteQuote: Quote) => {
      return favoriteQuote.id === quote.id;
    })
    this.favoriteQuotes.splice(index, 1);
    this.favoritesChanged.next(this.getFavoriteQuotes());
  }

  // slice so immutable
  // deep copy = (...)
  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote) {
    return this.favoriteQuotes.find((favoriteQuote: Quote) => {
      return favoriteQuote.id === quote.id;
    })
  }
}
