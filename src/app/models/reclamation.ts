
export interface IReclamation {
  ndossier?: string;
  numReclamation?: string;
  nature?: string;
  provenance?: string;
  createdAt?: string;
  pieceJointe ?: string;
  status?: string;
  criticality?: string;
  message?:string;
  dateAffectation?: string;
  uniteOrganisationnelle?: string;

}

export class Reclamation implements IReclamation
{
  constructor(
    public  ndossier?: string,
    public numReclamation?: string,
    public nature?: string,
    public provenance?: string,
    public createdAt?: string,
    public status?: string,
    public pieceJointe?: string,
    public criticality?: string,
    public message?:string
  ) {

  }
}

