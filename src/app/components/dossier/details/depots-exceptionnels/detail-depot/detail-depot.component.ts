import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { ToastService } from "../../../../../shared/components/toast/toast.service";
import { StatusDossier } from "../../../../../enums/status-dossier";
import { IDepotExceptionnel } from "../../../../../models/depot-exceptionnel";
import { FormItem } from "../../../../../shared/components/form/form.component";
import { CriticiteDossier } from "../../../../../enums/criticite-dossier";
import { TranslateService } from '@ngx-translate/core';
import {
  DeclareReclamationModalComponent
} from "../../../reclamations/declare-reclamation-modal/declare-reclamation-modal.component";
import {
  ConfirmReclamationModalComponent
} from "../../../reclamations/confirm-reclamation-modal/confirm-reclamation-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  DeclareDepotExceptionnelModalComponent
} from "../declare-depot-exceptionnel-modal/declare-depot-exceptionnel-modal.component";
import {ConfirmDepotModalComponent} from "../confirm-depot-modal/confirm-depot-modal.component";

@Component({
  selector: 'app-detail-depot',
  templateUrl: './detail-depot.component.html',
  styleUrls: ['./detail-depot.component.scss']
})
export class DetailDepotComponent implements OnInit {
  depotData?: IDepotExceptionnel;
  status: string | null = null;
  formItems!: FormItem[];

  constructor(private route: ActivatedRoute, private toastService: ToastService, private translate: TranslateService, private modalService: NgbModal, private router :Router) { }

  ngOnInit(): void {
    this.depotData = JSON.parse(localStorage.getItem('depotData')!);

    this.formItems = [
      {
        itemType: 'title',
        title: 'Informations géneral'
      },
      {
        itemType: 'field',
        placeholder: 'nDossier',
        type: 'text',
        value: 'AB-14022024',
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'nDepot',
        type: 'text',
        value: this.depotData?.ndepot,
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'natureDepot',
        type: 'text',
        value: 'Assurance vie',
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'compteBancaire',
        type: 'text',
        value:'1234 5678 9012 3456 7890 1234 5678',
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'montantDepot',
        type: 'text',
        value: this.depotData?.montant,
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'dateDeclaration',
        type: 'text',
        value: this.depotData?.dateDeclaration,
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'dateDepot',
        type: 'text',
        value: this.depotData?.dateDeclaration,
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'montantReclame',
        type: 'text',
        value: '250 000',
        disabled: true,
      },
      {
        itemType: 'file',
        placeholder: 'pieceJointe',
        type: 'text',
          value: [
    { name: 'Document1.pdf', size: '1.2', progress: 100, uploadComplete: true, url: 'path/to/document1.pdf', fileType: 'pdf' },
    { name: 'Document2.pdf', size: '2.5', progress: 100, uploadComplete: true, url: 'path/to/document2.pdf', fileType: 'pdf' },
    { name: 'Document3.pdf', size: '3.1', progress: 100, uploadComplete: true, url: 'path/to/document3.pdf', fileType: 'pdf' }
  ]
      },
    ];



    this.status = this.route.snapshot.queryParamMap.get('status');
    if (this.depotData?.status === StatusDossier.BROUILLON) {
      this.formItems.push(
        {
          itemType: 'button',
          text: 'Modifier',
          action: () => { this.openDeclareModal() },
          alignment: 'right',
          outlined: true

        },
        {
          itemType: 'button',
          text: 'Envoyer',
          action: '',
          alignment: 'right',

        },

        {
          itemType: 'button',
          text: 'Supprimer',
          action: '',
          alignment: 'left',
          outlined: true

        }
      );
    }

    this.translateNatureDepot();

    if (this.status) {
      this.showToast(this.status);
    }
  }

  submitForm()
  {
    console.log("sumbited")
  }
  openDeclareModal(depotData?: IDepotExceptionnel) {
    const modalRef = this.modalService.open(DeclareDepotExceptionnelModalComponent, { size: 'lg', backdrop: 'static' });

    if (depotData) {
      modalRef.componentInstance.depotData = depotData;
    }

    modalRef.result.then((status) => {
      const depotData = JSON.parse(localStorage.getItem('depotData')!);

      if (status && status !== StatusDossier.BROUILLON) {
        const confirmModalRef = this.modalService.open(ConfirmDepotModalComponent, { size: 'lg', backdrop: 'static' });
        confirmModalRef.componentInstance.depotData = depotData;

      }
    }, () => {
    });


  }

  translateNatureDepot(): void {
    const natureItem = this.formItems.find(item => item.placeholder === 'natureDepot');
    if (natureItem && this.depotData?.nature) {
      this.translate.get(`enum.natureDepot.${this.depotData.nature}`).subscribe((translated: string) => {
        natureItem.value = translated;
      });
    }
  }

  showToast(status: string) {
    const toastMessage = status === StatusDossier.BROUILLON ?
      this.toastService.showSuccess('Votre dépôt exceptionnel a bien été enregistré comme brouillon.') :
      this.toastService.showSuccess('Votre dépôt exceptionnel a été envoyé avec succès.');
    console.log(toastMessage);
  }

  statusArray = [
    { date: "", text: 'Dossier créé.' },
    { date: '18/10/2023 17:30', text: 'En attente des informations de règlement.', active: true },
    { date: '18/10/2023 15:30', text: 'Indemnisation calculée.' },
    { date: '18/10/2023 12:30', text: 'Règlement en cours de traitement.' }
  ];

  getBadgeClass(status: string | undefined): string {
    switch (status) {
      case StatusDossier.EN_COURS:
        return 'badge En-cours';
      case StatusDossier.CLOTUREE:
        return 'badge Clôturée';
      case StatusDossier.BROUILLON:
        return 'badge Brouillon';
      default:
        return 'badge';
    }
  }

  getTranslationKey(field: string | undefined): string {
    let category = '';
    if (field === CriticiteDossier.FAIBLE || field === CriticiteDossier.ELEVEE || field === CriticiteDossier.CRITIQUE) {
      category = 'enum.criticite.';
    } else {
      category = 'enum.statutDossier.';
    }
    return category;
  }

  previousState(): void {
    window.history.back();
  }
  protected readonly StatusDossier = StatusDossier;
  protected readonly StatusCompte = StatusDossier;
}
