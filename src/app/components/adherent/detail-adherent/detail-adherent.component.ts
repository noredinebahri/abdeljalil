import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-adherent',
  templateUrl: './detail-adherent.component.html',
  styleUrl: './detail-adherent.component.scss'
})
export class DetailAdherentComponent {
  showTab: string  = "depot-exceptionnel"
  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
