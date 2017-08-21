import { Subject } from 'rxjs/Subject';

export class SettingsService {
  private alternativeBackground = false;
  backGroundChanged = new Subject<boolean>();

  setBackground(alt: boolean) {
    this.alternativeBackground = alt;
    this.backGroundChanged.next(alt);
  }

  checkAltBackGround() {
    return this.alternativeBackground;
  }
}
