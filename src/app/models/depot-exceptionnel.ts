export interface IFile {
  name?: string;
  size?: string;
  progress?: number;
  uploadComplete?: boolean;
  url?: string;
  fileType?: string;
}

export class FileUpload implements IFile
{
  constructor(
    public  name?: string,
    public size?: string,
    public progress?: number,
    public uploadComplete?: boolean,
    public url?: string,
    public fileType?: string
  ) {

  }
}


export interface IDepotExceptionnel {
  ndepot?: string;
  nature?: string;
  montant?: string;
  montantReclamation?: string;
  CompteBancaire?:string;
  dateDeclaration?: string;
  status?: string;
  pieceJointeName?: IFile[];
  nomPrenom?: string;
  ndossier?: string;
  typeDeposant?: string;
}
export class DepotExceptionnel implements IDepotExceptionnel
{
  constructor(
  public  ndepot?: string,
  public nature?: string,
  public montant?: string,
  montantReclamation?: string,
  CompteBancaire?:string,
  public dateDeclaration?: string,
  public status?: string,
  public pieceJointeName?: IFile[],
  public nomPrenom?: string,
  public ndossier?: string,
  public typeDeposant?: string
  ) {

  }
}
