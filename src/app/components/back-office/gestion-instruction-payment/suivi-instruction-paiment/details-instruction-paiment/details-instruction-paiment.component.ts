import { Component } from '@angular/core';
 import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { FormItem } from 'src/app/shared/components/form/form.component';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
 
@Component({
  selector: 'app-details-instruction-paiment',
  templateUrl: './details-instruction-paiment.component.html',
  styleUrl: './details-instruction-paiment.component.scss'
})
export class DetailsInstructionPaimentComponent {
  constructor( private modalService: NgbModal, private toastService: ToastService) {}

  infosPerso: FormItem[] = [
    {
      itemType: 'title',
      title: 'Informations générales'
    },
    
    {
      itemType: 'field',
      placeholder: 'numeroDossier',
      type: 'text',
      value: 'UCYU685',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'numeroInstruction',
      type: 'text',
      value: 'HGVY8658',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'numeroReference',
      type: 'text',
      value: 'RDYR65',
      disabled: true,
    }
  ];

  goBack() {
    window.history.back();
  }

  
  statusArray = [
    {
      date: '18/10/2023 00:00',
      text: 'Status 3',
      active: true,
      isResponseCard: true,
      responseCardData: {
        header: 'Instruction de paiement rejetée',
        iconPath:"assets/images/svg/recycler.svg",
        title: 'Motif : Déposant ne s\'est pas présenté.',
        theme: 'red',
        disabled: false,
        buttons: [
          {
            text: 'Recycler',
            outlined:false,
            action:() => { this.displayMessage()}, 
            color:'red',
          }
        ]
      }
    },
    { date: '18/10/2023 00:00', text: 'Instruction de paiement en attente de retour de l’agent payeur.'   },
    { date: '18/10/2023 00:00', text: 'Instruction de paiement en attente d’envoi à l’agent payeur.' },
    { date: '18/10/2023 00:00', text: 'Instruction de paiement en attente de validation.' },
    { date: '18/10/2023 00:00', text: 'Instruction de paiement initiale.' }
  ];

  displayMessage(){
    this.toastService.showSuccess('L’instruction de paiement a été recyclée avec succès.');
  }
}
