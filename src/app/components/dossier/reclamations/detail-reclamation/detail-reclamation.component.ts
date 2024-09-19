import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "../../../../shared/components/toast/toast.service";
import {StatusDossier} from "../../../../enums/status-dossier";
import {IReclamation} from "../../../../models/reclamation";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  ConfirmCloturerReclamationModalComponent
} from "../confirm-cloturer-reclamation-modal/confirm-cloturer-reclamation-modal.component";
import {CriticiteDossier} from "../../../../enums/criticite-dossier";
import {FormItem} from "../../../../shared/components/form/form.component";
import {StatusCompte} from "../../../../enums/status-compte";
import {DeclareReclamationModalComponent} from "../declare-reclamation-modal/declare-reclamation-modal.component";
import {ConfirmReclamationModalComponent} from "../confirm-reclamation-modal/confirm-reclamation-modal.component";

@Component({
  selector: 'app-detail-reclamation',
  templateUrl: './detail-reclamation.component.html',
  styleUrl: './detail-reclamation.component.scss'
})
export class DetailReclamationComponent implements OnInit {
  reclamationData?: IReclamation;
  status: string | null = null;



  infosGenerales: FormItem[] = [
    {
      itemType: 'title',
      title: 'Informations génerales'
    },
    {
      itemType: 'field',
      placeholder: "numeroReclamation",
      type: 'text',
      value: 'RR20082004',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'canalEnvoie',
      type: 'text',
      value: 'Virement bancaire',
      disabled: true,
    },
  ];
  infosGeneralesBrouillon: FormItem[] = [
    {
      itemType: 'title',
      title: 'Informations génerales'
    },
    {
      itemType: 'field',
      placeholder: "numeroReclamation",
      type: 'text',
      value: 'RR20082004',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'canalEnvoie',
      type: 'text',
      value: 'Virement bancaire',
      disabled: true,
    },
    {
      itemType: 'button',
      alignment: 'right',
      text: 'Modifier',
      action: () => { this.openDeclareModal() },
      outlined: true,
      selected: false
    },
    {
      itemType: 'button',
      alignment: 'right',
      text: 'Envoyer',
      action: () => { this.openCloturerModal() },
      outlined: false,
      selected: false
    },
    {
      itemType: 'button',
      alignment: 'left',
      text: 'Supprimer',
      outlined: true,
      selected: false
    },

  ];
  votreReclamation: FormItem[] = [
    {
      itemType: 'title',
      title: 'Votre réclamation'
    },
    {
      itemType: 'field',
      placeholder: "natureReclamation",
      type: 'text',
      value: "Montant d'indemnisation incorrect",
      disabled: true,
    },
    {
      itemType: 'message',
      placeholder: 'message',
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non purus non eros ultricies blandit. Vivamus sit amet diam diam. Proin nec egestas justo, sed molestie tellus. Vestibulum tempus dui et dolor pellentesque lobortis. Nulla vestibulum vestibulum condimentum. Sed a ornare justo, eget rhoncus arcu. Aenean eget ullamcorper tortor, sit amet vehicula augue. Ut eu convallis mi, in semper elit.',
      disabled: true,
    },
    {
      itemType: 'file',
      placeholder: "pieceJointes",
      value: [
            { name: 'Document1.pdf', size: '1.2', progress: 100, uploadComplete: true, url: 'path/to/document1.pdf', fileType: 'pdf' },
            { name: 'Document2.pdf', size: '2.5', progress: 100, uploadComplete: true, url: 'path/to/document2.pdf', fileType: 'pdf' },
            { name: 'Document3.pdf', size: '3.1', progress: 100, uploadComplete: true, url: 'path/to/document3.pdf', fileType: 'pdf' }
          ]
    },
  ];


  constructor(private modalService: NgbModal, private route: ActivatedRoute, private toastService : ToastService, private router :Router) { }

  ngOnInit(): void {
    this.reclamationData = JSON.parse(localStorage.getItem('reclamationData')!);
    this.status = this.route.snapshot.queryParamMap.get('status');
    if (this.status) {
      this.showToast(this.status);
    }
  }

  showToast(status: string) {
    const toastMessage = status === StatusDossier.BROUILLON ?
      this.toastService.showSuccess('Votre réclamation a bien été enregistré comme brouillon.') :
      this.toastService.showSuccess('Votre réclamation a été envoyé avec succès.');
  }

  previousState(): void {
    window.history.back();
  }

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
    } else  {
      category = 'enum.statutDossier.';
    }
    return category;
  }


  statusArray = [
    { date: "", text: 'deposant.reclamation.detail.etatExecptionnel.dossierCree'},
    { date: '18/10/2023 18:00', text: 'deposant.reclamation.detail.etatExecptionnel.enAttenteInfo',active: true},
    { date: '18/10/2023 18:00', text: 'deposant.reclamation.detail.etatExecptionnel.indemnisationCalculee'   },
    { date: '18/10/2023 18:00', text: 'deposant.reclamation.detail.etatExecptionnel.reglementEncours' }
  ];
  protected readonly StatusDossier = StatusDossier;

  openCloturerModal(){

    const modalRef = this.modalService.open(ConfirmCloturerReclamationModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((status) => {
      console.log("status: ", status)
      if (status) {
        this.status = status;
        const reclamationData = JSON.parse(localStorage.getItem('reclamationData')!);
        modalRef.componentInstance.reclamationData = reclamationData;
        modalRef.componentInstance.isConfirmed = status === StatusDossier.CLOTUREE;
      }
    }, () => {});
  }

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

  protected readonly StatusCompte = StatusDossier;
}
