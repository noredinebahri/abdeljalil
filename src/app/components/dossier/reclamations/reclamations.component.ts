import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DeclareReclamationModalComponent } from "./declare-reclamation-modal/declare-reclamation-modal.component";
import { Router } from "@angular/router";
import { ConfirmReclamationModalComponent } from "./confirm-reclamation-modal/confirm-reclamation-modal.component";
import { ActionClickEvent, ActionConfig, ColumnConfig } from "../../../shared/components/table/table.config";
import { StatusDossier } from "../../../enums/status-dossier";
import { ReclamationService } from "../../../services/deposant/reclamation.service";
import { IReclamation } from "../../../models/reclamation";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.scss']
})
export class ReclamationsComponent implements OnInit {

  reclamations: IReclamation[] = [];
  translatedReclamations: any[] = [];

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private reclamationService: ReclamationService,
    private translate: TranslateService
  ) {}

  openDeclareModal() {
    const modalRef = this.modalService.open(DeclareReclamationModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((status) => {
      if (status) {
        const reclamationData = JSON.parse(localStorage.getItem('reclamationData')!);
        const confirmModalRef = this.modalService.open(ConfirmReclamationModalComponent, { size: 'lg', backdrop: 'static' });
        confirmModalRef.componentInstance.reclamationData = reclamationData;
        confirmModalRef.componentInstance.isDraft = (status === StatusDossier.BROUILLON);

        confirmModalRef.result.then((confirmStatus) => {
          if (confirmStatus === 'confirmed') {
            this.router.navigate(['/details-reclamation'], { queryParams: { status: status } });
          }
        }, () => {});
      }
    }, () => {});
  }



  loadReclamationData() {
    this.reclamationService.getAllReclamations().subscribe(
      (data) => {
        this.reclamations = data;
        this.translateReclamations();
      },
      (error) => {
        console.error('Error fetching reclamations', error);
      }
    );
  }

  translateReclamations() {
    const translations = this.translate.instant('enum.natureReclamation');
    this.translatedReclamations = this.reclamations.map(reclamation => {
      const natureKey = reclamation.nature as keyof typeof translations;
      return {
        ...reclamation,
        nature: translations[natureKey] || reclamation.nature
      };
    });
  }

  columns: ColumnConfig[] = [
    { field: 'numReclamation', header: 'deposant.reclamation.table.numReclamation' },
    { field: 'nature', header: 'deposant.reclamation.table.nature', type: 'text' },
    { field: 'createdAt', header: 'deposant.reclamation.table.createdAt' },
    { field: 'status', header: 'deposant.reclamation.table.status', type: 'badge' },
    { field: 'pieceJointe', header: 'deposant.reclamation.table.pieceJointeName' }
  ];

  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg' },
    // { label: 'cloturer', action: 'cloturer', icon: 'assets/images/icone/cloture.svg' }
  ];

  onActionClick(event: ActionClickEvent<any>): void {
    if (event.action === 'consult') {
      this.router.navigateByUrl('detail-reclamations');
    } else {
      console.log(`Action: ${event.action}, Item: `, event.item);
    }
  }

  ngOnInit() {
    console.log("result : ", JSON.parse(localStorage.getItem('reclamationData')!));
    this.loadReclamationData();
  }
}
