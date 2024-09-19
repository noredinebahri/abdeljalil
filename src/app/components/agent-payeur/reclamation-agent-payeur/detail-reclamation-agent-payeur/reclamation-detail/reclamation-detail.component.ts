import {Component, OnInit} from '@angular/core';
import {FormItem} from "../../../../../shared/components/form/form.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmResponseReclamationModal} from "./confirm-response-reclamation-modal/confirm-response-reclamation-modal";
import {NavigationEnd, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {filter} from "rxjs";
import {
  ConfirmRepondreModalComponent
} from "../../../../dossier/reclamations/confirm-repondre-modal/confirm-repondre-modal.component";

@Component({
  selector: 'app-reclamation-detail',
  templateUrl: './reclamation-detail.component.html',
  styleUrl: './reclamation-detail.component.scss'
})
export class ReclamationDetailComponent implements OnInit{

  reclamationItems!: FormItem[];
  repondreForm: FormGroup;
  showReponse: boolean = false;
  private allowedRouter = ['/adherent'];
  constructor(private modalService: NgbModal, private router: Router, private formBuilder: FormBuilder){
    this.repondreForm = this.formBuilder.group([{
      decision: [''],
      pieceJointe: [''],
    }
    ]);
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.showReponse = this.allowedRouter.some(route =>{
      event.urlAfterRedirects.includes(route)} );
    });
  }

  statusArray = [
    { date: '18/10/2023 00:00', text: 'Réclamation en cours de traitement.' },
    { date: '18/10/2023 00:00', text: 'Réclamation créée.' , active: true},
  ];

  ngOnInit(): void {
    this.reclamationItems = [
      {
        itemType: 'title',
        title: 'Informations génerales'
      },
      {
        itemType: 'badge',
        placeholder: 'criticite',
        type: 'badge',
        value: 'EN_COURS',
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'natureReclamation',
        type: 'text',
        value: "Montant d’indemnisation incorrect ",
        disabled: true,
      },

      {
        itemType: 'field',
        placeholder: 'message',
        type: 'message',
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non purus non eros ultricies blandit." +
                " Vivamus sit amet diam diam. Proin nec egestas justo, sed molestie tellus." +
                " Vestibulum tempus dui et dolor pellentesque lobortis." +
                " Nulla vestibulum vestibulum condimentum. Sed a ornare justo, eget rhoncus arcu." +
                " Aenean eget ullamcorper tortor, sit amet vehicula augue. Ut eu convallis mi, in semper elit.",
        disabled: true,
      },

      {
        itemType: 'file',
        placeholder: 'pieceJointes',
        value: [
          { name: 'Document1.pdf', size: '1.2', progress: 100, uploadComplete: true, url: 'path/to/document1.pdf', fileType: 'pdf' },
        ],
      }
    ]
    if(this.showReponse){
      this.reclamationItems.push({
        itemType: 'button',
        alignment: 'right',
        text: 'Répondre',
        action: () => { this.openModalResponse() },
        outlined: false,
        selected: false
      })
    }
  }

  openModalResponse()
  {
    const modalRef = this.modalService.open(ConfirmRepondreModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((status) => {
      if (status) {
        const responseReclamation = JSON.parse(localStorage.getItem('responseReclamation')!);
        const confirmModalRef = this.modalService.open(ConfirmResponseReclamationModal, { size: 'lg', backdrop: 'static' });
        confirmModalRef.componentInstance.responseReclamation = responseReclamation;

        confirmModalRef.result.then((confirmStatus) => {
          if (confirmStatus === 'confirmed') {
            this.router.navigate(['/detail-reclamation-agent-payeur/reclamation'], { queryParams: { status: status } });
          }
        }, () => {});
      }
    }, () => {});
  }

  openConfirmationModal() {
    const modalRef = this.modalService.open(ConfirmRepondreModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((status) => {
      // -------
    }, () => {});
  }

  handleFile(event: any) {
    if (event && event.target && event.target.files && event.target.files.length > 0) {
      // this.attachedFile = event.target.files[0];
    }
  }

}

