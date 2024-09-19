import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DeclareDepotExceptionnelModalComponent } from "./declare-depot-exceptionnel-modal/declare-depot-exceptionnel-modal.component";
import { Router } from "@angular/router";
import { ConfirmDepotModalComponent } from "./confirm-depot-modal/confirm-depot-modal.component";
import {ActionClickEvent, ActionConfig, ColumnConfig, FilterField} from "../../../../shared/components/table/table.config";
import { StatusDossier } from "../../../../enums/status-dossier";
import { IDepotExceptionnel } from "../../../../models/depot-exceptionnel";
import { DepotExceptionnelService } from "../../../../services/deposant/depot-exceptionnel.service";
import { TranslateService } from '@ngx-translate/core';
import {ITEMS_PER_PAGE} from "../../../../shared/constants/shared.constant";
import { ToastService } from 'src/app/shared/components/toast/toast.service';

@Component({
  selector: 'app-depots-exceptionnels',
  templateUrl: './depots-exceptionnels.component.html',
  styleUrls: ['./depots-exceptionnels.component.scss']
})
export class DepotsExceptionnelsComponent implements OnInit {

  depots: IDepotExceptionnel[] = [];
  translatedDepots: any[] = [];

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private depotService: DepotExceptionnelService,
    private translate: TranslateService, 
    private toastService: ToastService
  ) {}

  openDeclareModal(depotData?: IDepotExceptionnel) {
    const modalRef = this.modalService.open(DeclareDepotExceptionnelModalComponent, { size: 'lg', backdrop: 'static' });

    if (depotData) {
      modalRef.componentInstance.depotData = depotData;
    }

    modalRef.result.then((status) => {
      // Save status to local storage or handle it as needed
      const depotData = JSON.parse(localStorage.getItem('depotData')!);

      if (status && status !== StatusDossier.BROUILLON) {
        const confirmModalRef = this.modalService.open(ConfirmDepotModalComponent, { size: 'lg', backdrop: 'static' });
        confirmModalRef.componentInstance.depotData = depotData;

        confirmModalRef.result.then((confirmStatus) => {
          if (confirmStatus === 'confirmed') {
            this.router.navigate(['/details-depot'], { queryParams: { status: status } });
          }
        }, () => {
        });
      } else {
        this.router.navigate(['/details-depot'], { queryParams: { status: status } });
      }
    }, () => {
    });


  }

  loadDepotData() {
    this.depotService.getAllDepots().subscribe(
      (data) => {
        this.depots = data;
        this.translateDepots();
      },
      (error) => {
        console.error('Error fetching depots', error);
      }
    );
  }

  translateDepots() {
    const translations = this.translate.instant('enum.natureDepot');
    this.translatedDepots = this.depots.map(depot => {
      const natureKey = depot.nature as keyof typeof translations;
      return {
        ...depot,
        nature: translations[natureKey] || depot.nature
      };
    });
  }


  filterFields: FilterField[] = [
    { name: 'numeroDossier', placeholder: 'N° dossier', type: 'text' },
    { name: 'numeroReclamation', placeholder: 'N° réclamation', type: 'text' },
    { name: 'nature', placeholder: 'Nature', type: 'select', options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }] },
    { name: 'provenance', placeholder: 'Provenance', type: 'select', options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }] },
    { name: 'dateCreation', placeholder: 'Date création', type: 'date' },
    { name: 'statut', placeholder: 'Statut', type: 'select', options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }] },
    { name: 'criticite', placeholder: 'Criticité', type: 'select', options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }] }
  ];



  columns: ColumnConfig[] = [
    { field: 'ndepot', header: 'deposant.depotExceptionnel.table.ndepot' },
    { field: 'nature', header: 'deposant.depotExceptionnel.table.nature', type: 'text' },
    { field: 'montant', header: 'deposant.depotExceptionnel.table.montant', type: 'decimal' },
    { field: 'dateDeclaration', header: 'deposant.depotExceptionnel.table.dateDeclaration' },
    { field: 'status', header: 'deposant.depotExceptionnel.table.status', type: 'badge' },
    { field: 'pieceJointeName', header: 'deposant.depotExceptionnel.table.pieceJointeName', type:'file' }
  ];

  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg'},
    { label: 'edit', action: 'edit', icon: 'assets/images/icone/edit.svg', fieldCondition: 'status', condition: StatusDossier.BROUILLON},
    { label: 'delete', action: 'delete', icon: 'assets/images/icone/delete.svg', fieldCondition: 'status', condition: StatusDossier.BROUILLON }
  ];

  onActionClick(event: ActionClickEvent<any>): void {
    if (event.action === 'consult') {
      this.router.navigateByUrl('detail-depot');
    } else if (event.action === 'edit') {
      this.openDeclareModal(event.item);
    } else {
      this.toastService.showSuccess('le dépôt exceptionnel numéro '+ event.item.ndepot + ' a été supprimé avec succès.');
      /*this.depotService.delete(event.item.ndepot).subscribe(() => {
          this.toastService.showSuccess('le dépôt exceptionnel numéro '+ event.item.ndepot + ' a été supprimé avec succès.');
        },
        (error) => {
          console.error('Error deleting depot', error);
        }
      );*/
    }
  }

  ngOnInit() {
    this.loadDepotData();
  }



  /*filterFields: FilterField[] = [
    { name: 'numeroDossier', type: 'text', placeholder: 'N° dossier' },
    { name: 'numeroReclamation', type: 'text', placeholder: 'N° réclamation' },
    { name: 'nature', type: 'select', placeholder: 'Nature', options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }] },
    { name: 'provenance', type: 'select', placeholder: 'Provenance', options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }] },
    { name: 'dateCreation', type: 'date', placeholder: 'Date création' },
    { name: 'statut', type: 'select', placeholder: 'Statut', options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }] },
    { name: 'criticite', type: 'select', placeholder: 'Criticité', options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }] }
  ];*/

  filteredData: any[] = [];

  onFilterChanged(filters: any) {
    // Implement the logic to filter data based on the received filters
    console.log(filters);
    // For example, you might call a service to fetch filtered data
    // this.filteredData = this.myService.getFilteredData(filters);
  }

  protected readonly ITEMS_PER_PAGE = ITEMS_PER_PAGE;
}
