import { Component } from '@angular/core';
import {FormItem} from "../../../../shared/components/form/form.component";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-infos-role',
  templateUrl: './infos-role.component.html',
  styleUrl: './infos-role.component.scss'
})
export class InfosRoleComponent  {

  monochromeEnabled: boolean = false;
  togglesDisabled: boolean = true;
  togglesHidden: boolean = false;
  isEditing: boolean = false;
  isDisabled: boolean = true;
  constructor(private router: Router,private translate: TranslateService) {
    const navigation = this.router.getCurrentNavigation();
    this.monochromeEnabled = navigation?.extras.state?.['monochrome'] || false ;
    this.togglesDisabled = navigation?.extras.state?.['disableToggles'] || true;
    this.togglesHidden = navigation?.extras.state?.['hideToggles'] || false;
  }

  infosGenrales: FormItem[] = [
    {
      itemType: 'title',
      title: 'Informations générales'
    },
    {
      itemType: 'field',
      placeholder: 'codeRole',
      type: 'text',
      value: 'R010',
      disabled: true,
    },

    {
      itemType: 'field',
      placeholder: 'nomRole',
      type: 'text',
      value: 'Téléopérateurs',
      disabled: true,
    },

  ];
  data = [
    { id: 1, name: "Informations du déposant_Dossiers déposants" },
    { id: 1, name: "Informations du déposant_Consulter les informations du déposant_Dossiers déposants" },
    { id: 1, name: "Informations du déposant_Mettre à jour les informations générales du déposant_Dossiers déposants" },
    { id: 1, name: "Détails de l'indemnisation_Consulter les détails de l'indemnisation du déposant_Dossiers déposants" },
    { id: 1, name: "Détails de l'indemnisation_Consulter les informations générales du dossier d'indemnisation_Dossiers déposants" },
    { id: 1, name: "Détails de l'indemnisation_Consulter le mode de règlement_Dossiers déposants" },
    { id: 1, name: "Réclamations_Consulter les réclamations du déposant_Dossiers déposants" },
    { id: 1, name: "Réclamations_Rédiger une réclamation pour un déposant_Dossiers déposants" },
    { id: 1, name: "Réclamations_Répondre à une réponse reçue_Dossiers déposants" },

    { id: 3, name: "Réclamation_Consulter la réclamation_Réclamations du déposant concernant le centre d'appel" },
    { id: 3, name: "Réclamation_Répondre à une réclamation_Réclamations du déposant concernant le centre d'appel" },
    { id: 3, name: "Informations du déposant_Consulter les informations du déposant_Réclamations du déposant concernant le centre d'appel" },
    { id: 3, name: "Détails de l'indemnisation_Consulter les détails de l'indemnisation du déposant_Réclamations du déposant concernant le centre d'appel" },


  ];

  translateData(): void {
    this.data = this.data.map(item => {
      const translatedName = this.translate.instant(item.name); // Translate each name
      return { ...item, name: translatedName }; // Update the name property with the translated text
    });
  }
  modify() {
    this.infosGenrales = this.infosGenrales.map(item => {
      if (item.placeholder === 'nomRole') {
        return { ...item, disabled: false };
      }
      return item;
    });
    this.togglesDisabled = false;
    this.isEditing = true;
    this.isDisabled = false;
  }

  cancel() {
    this.isEditing = false;
    this.isDisabled = true;
  }

  save() {
    // Implement save logic here
    this.isEditing = false;
  }
}
