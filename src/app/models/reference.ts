export interface IReference {
  numReferentiel?: string;
  referentiel?: string;
  routerLink?: string;


}

export class Reference implements IReference
{
  constructor(
    public  numReferentiel?: any,
    public referentiel?: string,
    public routerLink?: string

  ) {

  }
}
