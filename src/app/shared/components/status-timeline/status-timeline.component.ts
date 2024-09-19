import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-timeline',
  templateUrl: './status-timeline.component.html',
  styleUrls: ['./status-timeline.component.scss']
})
export class StatusTimelineComponent implements OnInit {

  /**
   * @Input statuses: Array of status objects.
   * Each status has a 'date' (string), 'text' (string), and an 'active' (boolean).
   * and an optional 'isResponseCard' (boolean).
   * This array should be sorted by date and if not have any active statue it will take the last as default.
   */
  @Input() statuses: { date: string, text: string, active?: boolean, isResponseCard?: boolean, responseCardData?: any }[] = [];
  currentIndex: number = -1;

  constructor() { }

  ngOnInit(): void {
    this.ensureActiveStatus();
    this.currentIndex = this.statuses.findIndex(status => status.active);
  }

  ensureActiveStatus(): void {
    const activeStatus = this.statuses.find(status => status.active);
    if (!activeStatus && this.statuses.length > 0) {
      this.statuses[0].active = true;
    }
  }

  getStatusClass(index: number): string {
    let classes = '';
    if (index < this.currentIndex) {
      classes = 'previous';
    } else if (index === this.currentIndex) {
      classes = 'active';
    } else {
      classes = 'next';
    }

    if (this.statuses[index].isResponseCard) {
      classes += ' has-response-card';
    }
    return classes;
  }



}
