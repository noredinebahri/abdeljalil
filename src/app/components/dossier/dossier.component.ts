import { Component } from '@angular/core';
import {StatusReclamation} from "../../enums/status-reclamation";

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrl: './dossier.component.scss'
})
export class DossierComponent {

  protected readonly StatusReclamation = StatusReclamation;
}
