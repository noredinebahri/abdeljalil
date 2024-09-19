import { Component } from '@angular/core';


@Component({
  selector: 'app-etat-dossier',
  templateUrl: './etat-dossier.component.html',
  styleUrl: './etat-dossier.component.scss'
})
export class EtatDossierComponent {

  statusArray = [
    { date: '', text: 'deposant.details.etatAvancementDossier.status.reglementEncours'},
    { date: '18/10/2023 18:30', text: 'deposant.details.etatAvancementDossier.status.enAttenteInfoReglement',active:true},
    { date: '18/10/2023 17:30', text: 'deposant.details.etatAvancementDossier.status.indemnisationCalculee'   },
    { date: '18/10/2023 15:30', text: 'deposant.details.etatAvancementDossier.status.indemnisationCalculee'   },
    { date: '18/10/2023 12:30', text: 'deposant.details.etatAvancementDossier.status.dossierCree' }
  ];
  example1=[
    // { date: '18/10/2023 15:30', text: 'deposant.details.etatAvancementDossier.status.indemnisationCalculee'   },
    { date: '18/10/2023 15:30', text: 'deposant.details.etatAvancementDossier.status.indemnisationCalculee'   },
    { date: '2024-06-03 12:30' ,
      text: 'Status 3',
      active: true,
      isResponseCard: true,
      responseCardData: {
        header: 'Response Card Header',
        iconPath:"assets/images/svg/purple-icon-info.svg",
        title: 'Response Card Title',
        content: 'This is the content of the response card.',
        theme: 'red',
        disabled: true,
        link: 'http://example.com',
        linkText: 'Read more',
        buttons: [
          { text: 'Button 1', action: this.button1Action.bind(this) },
          { text: 'Button 2', action: this.button2Action.bind(this) }
        ]
      }
    },
    { date: '2024-06-03 12:30' ,
      text: 'Status 3',
      active: true,
      isResponseCard: true,
      responseCardData: {
        header: 'Response Card Header',
        iconPath:"assets/images/svg/purple-icon-info.svg",
        title: 'Response Card Title',
        content: 'This is the content of the response card.',
        theme: 'red',
        disabled: true,
        link: 'http://example.com',
        linkText: 'Read more',
        buttons: [
          { text: 'Button 1', action: this.button1Action.bind(this) },
          { text: 'Button 2', action: this.button2Action.bind(this) }
        ]
      }
    },
    { date: '2024-06-03 12:30' ,
      text: 'Status 3',
      active: true,
      isResponseCard: true,
      responseCardData: {
        header: 'Dossier gelé',
        iconPath:"assets/images/svg/purple-icon-info.svg",
        title: 'Motif de la suspicion Lorem ipsum dolor sit amet, consectetur adipiscing elit.Motif de la suspicion Lorem ipsum dolor sit amet, consectetur adipiscing elit.Motif de la suspicion Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        content: 'Identifié par : Hamid Benhamida',
        theme: 'grey',
        disabled: true,
        link: 'http://example.com',
        // linkText: 'Read more',
        // buttons: [
        //   { text: 'Button 1', action: this.button1Action.bind(this) },
        //   { text: 'Button 2', action: this.button2Action.bind(this) }
        // ]
      }
    },
    { date: '18/10/2023 15:30', text: 'deposant.details.etatAvancementDossier.status.indemnisationCalculee'   },
    { date: '18/10/2023 15:30', text: 'deposant.details.etatAvancementDossier.status.indemnisationCalculee'   },
    { date: '18/10/2023 15:30', text: 'deposant.details.etatAvancementDossier.status.indemnisationCalculee'   },


  ];

  constructor() {}


  goBack() {
    window.history.back();

  }

  button1Action() {
    console.log('Button 1 clicked');

  }
  button2Action() {
    console.log('Button 2 clicked');

  }

}
