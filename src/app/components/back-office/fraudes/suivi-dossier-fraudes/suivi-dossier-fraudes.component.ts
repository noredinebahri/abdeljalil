import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormItem } from 'src/app/shared/components/form/form.component';
import { UpdateModalComponent } from '../../referentiels/update-modal/update-modal.component';
import { FraudeModalComponent } from '../fraude-modal/fraude-modal.component';

@Component({
  selector: 'app-suivi-dossier-fraudes',
  templateUrl: './suivi-dossier-fraudes.component.html',
  styleUrl: './suivi-dossier-fraudes.component.scss'
})
export class SuiviDossierFraudesComponent implements OnInit{


  constructor(
    private modalService: NgbModal,
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openUpdateModal(): void {
   
    const modalRef = this.modalService.open(FraudeModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.formItems = this.formItems3; 
    modalRef.componentInstance.title='fraude.modal.qualificationDeNonFraude'

    modalRef.componentInstance.saveClicked.subscribe(() => {
      this.statusArray = this.statusArrayModified; // Réinitialisez formItems3 ici
      // Vous pouvez également mettre à jour formItems3 avec une nouvelle valeur si nécessaire
    });
  
    
  }
  
  
  
  infosGenrales: FormItem[] = [
    {
      itemType: 'title',
      title: 'Informations générales'
    },
    {
      itemType: 'field',
      placeholder: 'nfraude',
      type: 'text',
      value: 'DD/01062020/AV',
      disabled: true,
    },

    {
      itemType: 'field',
      placeholder: 'dateIndentificationFraude',
      type: 'text',
      value: '20/06/2024',
      disabled: true,
    },

  ];

  example1 = [
    {
      date: '18/10/2023 12:30',
      text: 'Status 3',
      active: true,
      isResponseCard: true,
      responseCardData: {
        header: 'Rôle créé',
        iconPath: "assets/images/svg/purple-icon-info.svg",
        title: '',
        content: 'Par : Bennani Marayame',
        theme: 'purple',
        disabled: true,
      }
    },

  ];
  statusArray = [
    { date: "", text: 'Dossier créé.' },
    {
      date: '18/10/2023 12:30',
      text: 'Status 3',
      active: true,
      isResponseCard: true,
      responseCardData: {
        header: 'Dossier gélé',
        iconPath:"assets/images/svg/orange-icon-info.svg",
        title: 'Commentaire de la suspicion Lorem ipsum dolor sit amet consecteur adipiscin elit',
        content: 'Par : Bennani Marayame',
        theme: 'orange',
        disabled: false,
        buttonText:"Qualifiez-vous ce dossier frauduleux ?",
        buttons: [
          {
            text: 'Oui',
            outlined:false,
            buttonBolor:'#FA7B1F',
            action:() => { this.openUpdateModal() }, 
          },{

            text: 'Non',
            outlined:true

          }
        ]
      }
    },
    { date: '18/10/2023', text: 'Indemnisation calculée.' },
    { date: '18/10/2023', text: 'Règlement en cours de traitement.' }
  ];

  statusArrayModified = [
    { date: "", text: 'Dossier créé.' },
    {
      date: '18/10/2023 12:30',
      text: 'Status 3',
      active: true,
      isResponseCard: true,
      responseCardData: {
        header: 'Dossier gélé',
        iconPath:"assets/images/svg/orange-icon-info.svg",
        title: 'Commentaire de la suspicion Lorem ipsum dolor sit amet consecteur adipiscin elit',
        content: 'Par : Bennani Marayame',
        theme: 'red',
        disabled: false,
        buttonText:"Qualifiez-vous ce dossier frauduleux ?",
        buttons: [
          {
            text: 'Oui',
            outlined:false,
            buttonBolor:'#FA7B1F',
            action:() => { this.openUpdateModal() }, 
          },{

            text: 'Non',
            outlined:true

          }
        ]
      }
    },
    { date: '18/10/2023', text: 'Indemnisation calculée.' },
    { date: '18/10/2023', text: 'Règlement en cours de traitement.' }
  ];


    formItems3 : FormItem[] = [
      
 
      {
        itemType: 'textarea',  
        placeholder: 'commentaires',
        text:'commentaires',
        rows: 4,  
        disabled: false,
      },
      {
        itemType: 'file',  
        placeholder: 'uploadx',
        disabled: false,
      },


    ];
  
}
