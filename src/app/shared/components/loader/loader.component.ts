import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { LoaderService } from './loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  template: `
    @if (loaderService.isLoading | async) {
      <div class="progress-loader">
        <div class="loading-spinner">
          <img src="assets/images/loader.svg">
          <span class="loading-message">{{ 'global.action.loading' | translate }}</span>
        </div>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnDestroy  {
  
  private subscription: Subscription;

  constructor(public loaderService: LoaderService) {
    this.subscription = this.loaderService.isLoading.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
