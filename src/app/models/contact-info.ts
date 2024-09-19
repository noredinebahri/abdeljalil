import {IVille} from "./referentiel/ville";
import {IPays} from "./referentiel/pays";
import {IPersonne} from "./personne";

export interface ContactInfo {
  id?: number;
  adresse1?: string;
  adresse2?: string;
  email?: string;
  codePostal?: string;
  ville?: IVille;
  pays?: IPays;
  mobile?: string;
  fixe?: string;
  personne?: IPersonne;

}
