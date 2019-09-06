import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'Adz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'searchEngine';
  constructor(private translate: TranslateService)
  {}

  useLanguage(language: string) {
    this.translate.use(language);
}
}
