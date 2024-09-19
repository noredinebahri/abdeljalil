
export interface IComptes {
  pcec?: string;
  natureCompte?: string;
  rib?: string;
  statusCompte?: string;

}

export class Compte implements IComptes
{
  constructor(
    public  pcec?: string,
    public natureCompte?: string,
    public rib?: string,
    public statusCompte?: string,

  ) {

  }
}

