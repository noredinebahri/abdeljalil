import { Component, OnInit, Renderer2, RendererFactory2 } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { isRTL } from './shared/utils/langue-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'SGFG';

  private renderer: Renderer2;

  constructor(
    private translateService: TranslateService,
    rootRenderer: RendererFactory2
  ) {
    this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
  }


  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => {

      this.renderer.setAttribute(document.querySelector('html'), 'lang', langChangeEvent.lang);

      this.updatePageDirection();
    });
    this.isArabicActive();
  }

  isArabicActive():boolean{
    return this.translateService.getDefaultLang() === "ar";
  }
  private updatePageDirection(): void {
    this.renderer.setAttribute(
      document.querySelector('html'),
      'dir',
      isRTL(this.translateService.currentLang) ? 'rtl' : 'ltr'
    );
  }

}
