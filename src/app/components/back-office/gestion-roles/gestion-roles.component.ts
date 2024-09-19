import {Component, inject} from '@angular/core';
import {ActionClickEvent, ActionConfig, ColumnConfig, FilterField} from "../../../shared/components/table/table.config";
import {Router} from "@angular/router";
import {Role} from "../../../models/role";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmeModaleComponent} from "./confirme-modal/confirme-modale.component";
import {StatusRole} from "../../../enums/role-statut";

@Component({
  selector: 'app-gestion-roles',
  templateUrl: './gestion-roles.component.html',
  styleUrl: './gestion-roles.component.scss'
})
export class GestionRolesComponent {

  totalItemsTitle: string = "rôle";
  totalItems: number =20;
  isReactivation: boolean = false;
  // form: FormGroup;
  private modalService = inject(NgbModal);
  private router  =inject(Router)


  // constructor( private formBuilder: FormBuilder, private router: Router) {
  //   this.form = this.formBuilder.group([{
  //     referentiel: [null],
  //     code: [null, [Validators.required]],
  //     libelleVF: [null, [Validators.required]],
  //     libellVA: [null, [Validators.required]],
  //     plafond: [null, [Validators.required]]
  //   }]);
  // }

  columns: ColumnConfig[] = [
    { field: 'codeRole', header: 'deposant.gestionRoles.table.codeRole', type: 'text'  },
    { field: 'nomRole', header: 'deposant.gestionRoles.table.nomRole', type: 'text' },
    { field: 'statut', header: 'deposant.gestionRoles.table.statut', type: 'badge', style: 'width: 0%;' },
  ];
  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg'  },
    { label: 'edit', action: 'consult', icon: 'assets/images/icone/edit.svg' },
    { label: 'desactiver', action: 'consult', icon: 'assets/images/icone/desactiver.svg',fieldCondition: "statut", condition:StatusRole.true },
  ];

  filterFields: FilterField[] = [
    { name: 'codeRole', placeholder: 'Code rôle', type: 'text',style: 'width: 8%' },
    { name: 'nomRole', placeholder: 'Nom rôle', type: 'text', style: 'width: 30%' },
    { name: 'statut', placeholder: 'Statut', type: 'select', options:[{ value: 'true', label: 'Activé'}, { value: 'false', label: "Désactivé"}] ,style: 'width: 30%'  },
  ];


  tableData: Role[] = [
    {
      codeRole: 'R001',
      nomRole: 'Administrateur',
      typeEntite: 'SGFG',
      entite: 'Entity1',
      statut: StatusRole.true
    },
    {
      codeRole: 'R002',
      nomRole: 'RR20082005',
      typeEntite: 'TypeB',
      entite: 'Entity2',
      statut: StatusRole.true
    },
    {
      codeRole: 'R003',
      nomRole: 'RR20082006',
      typeEntite: 'TypeA',
      entite: 'Entity3',
      statut: StatusRole.false
    },
    {
      codeRole: 'R004',
      nomRole: 'RR20082007',
      typeEntite: 'TypeC',
      entite: 'Entity4',
      statut: StatusRole.true
    },
    {
      codeRole: 'R005',
      nomRole: 'RR20082008',
      typeEntite: 'TypeB',
      entite: 'Entity5',
      statut: StatusRole.true
    }
  ];
  updateButtonAction: () => void = () => this.router.navigateByUrl('back-office/ajout-role');
  // filterFields1: FilterField[] = [
  //   { name: 'code', placeholder: 'referentiel.code', type: 'text', style: 'min-width: 100px; width: 100px;' },
  //   { name: 'libelleVF', placeholder: 'referentiel.libelleVF', type: 'text' },
  //   { name: 'libelleVR', placeholder: 'referentiel.libelleVA', type: 'text' },
  //   { name: 'statut', placeholder: 'referentiel.statut', type: 'select', options:[{ value: 'true', label: 'Modifier'}, { value: 'false', label: 'Désactiver'}]},
  // ];

  onActionClick(event: ActionClickEvent<any>): void {
    if (event.action === 'consult') {
      this.router.navigateByUrl('gestion-roles/role');
    } if (event.action === 'edit') {
      this.router.navigateByUrl('gestion-roles/role');
    }
    if (event.action === 'desactiver') {
      this.confirmDesactiver(false)
    }
  }

  confirmDesactiver(isReactivation: boolean) {
    this.isReactivation = isReactivation;
    const modalRef = this.modalService.open(ConfirmeModaleComponent, {
      size: 'lg',
      backdrop: 'static',
    });

    // Pass data to the modal component
    modalRef.componentInstance.isReactivation = this.isReactivation;
  }

  // openUpdateModal() {
  //   console.log("the model opened")
  //   const modalRef = this.modalService.open(UpdateModalComponent, { size: 'lg', backdrop: 'static' });
  //   modalRef.componentInstance.referentiel = 'Nature des dépôts exceptionnels'
  //   modalRef.componentInstance.referentielFrom = this.form;
  //   modalRef.result.then((status) => {
  //     if (status) {
  //       const confirmModalRef = this.modalService.open(ConfirmReclamationModalComponent, { size: 'lg', backdrop: 'static' });
  //       // confirmModalRef.componentInstance.reclamationData = reclamationData;
  //       // confirmModalRef.componentInstance.isDraft = (status === StatusDossier.BROUILLON);
  //
  //       // confirmModalRef.result.then((confirmStatus) => {
  //       //   if (confirmStatus === 'confirmed') {
  //       //     this.router.navigate(['/details-reclamation'], { queryParams: { status: status } });
  //       //   }
  //       // }, () => {});
  //     }
  //   }, () => {});
  // }

}
