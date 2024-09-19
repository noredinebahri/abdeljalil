import { IFile } from "./depot-exceptionnel";

export interface ICampagneIndemnisation {
  numCampagne?:number;
  natureCampagne?: string;
    nomAdherent?: string;
    dateDebut?: string;
    dateFin?: string;
    Commentaires?:string;
    file?: IFile[]

 
  
  }
  
  export class CampagneIndemnisation implements ICampagneIndemnisation
  {
    constructor(
      public  numCampagne?: number,
      public  nomAdherent?: string,
      public natureCampagne?: string,
      public dateDebut?: string,
      public dateFin?: string,
      public Commentaires?:string,
      public file?:IFile[],
  
    ) {
  
    }
  }
  