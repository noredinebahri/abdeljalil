export interface ITrace {
    typeOperation?: string;
    element?: string;
    dateOperation?: string;
    responsableOperation?: string;
  }
  
  export class Trace implements ITrace{
    constructor(
      public typeOperation?: string,
      public element?: string,
      public dateOperation?: string,
      public responsableOperation?: string,
    ) {
    }
  }
  