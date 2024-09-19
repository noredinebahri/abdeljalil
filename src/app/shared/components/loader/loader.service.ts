import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {

  public isLoading = new BehaviorSubject(false);

  private subscriberCount = 0;

  constructor() {
  }

  startLoading(): void {
    if (this.subscriberCount === 0) {
      this.isLoading.next(true);
    }
    this.subscriberCount++;
  }

  stopLoading(): void {
    this.subscriberCount--;
    if (this.subscriberCount === 0) {
      this.isLoading.next(false);
    }
  }

}
