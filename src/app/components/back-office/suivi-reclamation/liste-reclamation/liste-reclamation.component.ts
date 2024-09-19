import {Component, OnInit} from '@angular/core';
import {
  ActionClickEvent,
  ActionConfig,
  ColumnConfig,
  FilterField
} from "../../../../shared/components/table/table.config";
import {Reclamation} from "../../../../models/reclamation";
import {ReclamationService} from "../../../../services/deposant/reclamation.service";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {
  AffectationReclamationModalComponent
} from "../affectation-reclamation-modal/affectation-reclamation-modal.component";
import {ReponseReclamationModalComponent} from "../reponse-reclamation-modal/reponse-reclamation-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-liste-reclamation',
  templateUrl: './liste-reclamation.component.html',
  styleUrl: './liste-reclamation.component.scss'
})
export class ListeReclamationComponent implements OnInit {

  reclamations: Reclamation[] = [];
  translatedReclamations: Reclamation[] = [];

  columns: ColumnConfig[] = [
    { field: 'ndossier', header: 'referentiel.ndossier'},
    { field: 'numReclamation', header: 'referentiel.numReclamation'},
    { field: 'nature', header: 'referentiel.nature', type: 'text'},
    { field: 'createdAt', header: 'referentiel.dateCreation', type: 'date' },
    { field: 'dateAffectation', header: 'referentiel.dateAffectation', type: 'date' },
    { field: 'uniteOrganisationnelle', header: 'referentiel.uniteOrganisationnelle', type: 'text'},
    { field: 'status', header: 'referentiel.status', type: 'badge'},
    { field: 'criticality', header: 'referentiel.criticality', type: 'badge'},
  ];

  filterFields: FilterField[] = [
    { name: 'ndossier', placeholder: 'referentiel.ndossier', type: 'text' , style: 'width: 30%'},
    { name: 'numReclamation', placeholder: 'referentiel.numReclamation', type: 'text' , style: 'width: 30%'},
    { name: 'nature', placeholder: 'referentiel.nature', type: 'text' , style: 'width: 30%'},
    { name: 'createdAt', placeholder: 'referentiel.dateCreation', type: 'date' },
    { name: 'dateAffectation', placeholder: 'referentiel.dateAffectation', type: 'date' },
  ];

  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg', },
    { label: 'affecter', action: 'affecter', icon: 'assets/images/icone/affect.svg' },
    { label: 'repondre', action: 'repondre', icon: 'assets/images/icone/comment.svg' },
  ];

  totalItemsTitle: string = "réclamation";
  totalItems: number = 0;



  constructor(
    private reclamationService: ReclamationService,
    private translate: TranslateService,
    private router: Router,
    private modalService: NgbModal
  ) { }


  ngOnInit(): void {
    this.loadReclamations();
  }

  handelActions(event: ActionClickEvent<any>): void {
    if (event.action === 'consult') {
      this.router.navigate(['/suivi-reclamation', event.item.ndossier]);
    }else if(event.action === 'affecter') {
      this.affecterReclamation();
    }else if(event.action === 'repondre') {
      this.repondreReclamation();
    }
  }


  private loadReclamations() {
    this.reclamationService.getAllReclamations().subscribe(
      (data) => {
        this.reclamations = data;
        this.translateReclamations();
        this.totalItems = this.reclamations.length;
      },
      (error) => {
        console.error('Error fetching reclamations', error);
      }
    );
  }
  private translateReclamations() {
    const translations = this.translate.instant('enum.natureReclamation');
    this.translatedReclamations = this.reclamations.map(reclamation => {
      const natureKey = reclamation.nature as keyof typeof translations;
      return {
        ...reclamation,
        nature: translations[natureKey] || reclamation.nature
      };
    });
  }

  private affecterReclamation() {
    const modalRef = this.modalService.open(AffectationReclamationModalComponent, {size: 'lg'});
  }

  private repondreReclamation() {
    const modalRef = this.modalService.open(ReponseReclamationModalComponent, {size: 'lg'});
  }
}
