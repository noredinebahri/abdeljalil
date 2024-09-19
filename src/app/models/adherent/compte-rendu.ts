export interface IcompteRendu {
  id?: string;
  nom?: string;
  dateGeneration?: Date;


}

export class CompteRendu implements IcompteRendu
{
  constructor(
    public  id?: string,
    public nom?: string,
    public dateGeneration?: Date,

  ) {

  }
}
