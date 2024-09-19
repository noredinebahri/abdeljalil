import {Authority} from "./authority";

export interface IRole {
  codeRole?: string;
  nomRole?: string;
  typeEntite?: string;
  entite?: string;
  statut?: string;
  authorities?: Authority[];


}

export class Role implements IRole
{
  constructor(
    public  codeRole?: string,
    public nomRole?: string,
    public typeEntite?: string,
    public entite?: string,
    public statut?: string,
    public authorities?: Authority[]

  ) {

  }
}
