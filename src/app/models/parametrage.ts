import { IFile } from "./depot-exceptionnel";

export interface IParametrage {
  numParametre?:number;
  parametre?: string;
    valeur?: string;
    dateModif?: string;
    commentaire?:string;
    file?: IFile[]

 
  
  }
  
  export class Parametrage implements IParametrage
  {
    constructor(
      public    numParametre?:number,
      public   parametre?: string,
      public natureCampagne?: string,
      public valeur?: string,
      public dateModif?: string,
      public commentaire?:string,
      public file?:IFile[],
  
    ) {
  
    }
  }
  