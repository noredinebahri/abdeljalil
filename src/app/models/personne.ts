import {ContactInfo} from "./contact-info";

export interface IPersonne {
  id?: number;
  nom?: string;
  prenom?: string;
  dateNaissance?: string;
  nationalite?: string;
  natureIdentifiant?: string;
  numeroIdentifiant?: string;
  contactInfo?: ContactInfo;
}
