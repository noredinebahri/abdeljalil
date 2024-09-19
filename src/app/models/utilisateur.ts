export interface IUtilisateur {
  login?: string;
  fullname?: string;
  email?: string;
  typeEntite?: string;
  entite?: string;
  statut?: boolean;
}

export class Utilisateur implements IUtilisateur{
  constructor(
    public login?: string,
    public fullname?: string,
    public email?: string,
    public typeEntite?: string,
    public entite?: string,
    public statut?: boolean
  ) {
  }
}
