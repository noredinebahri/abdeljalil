
export interface IdossiersFrauduleux {
    ndossier?: string;
    nFraude?: string;
    dateGel?: string;
    dateIdFraude?: string;
    motifGel?: string;
    agentTraitant ?: string;
    dateDecision?:string;
    status?:string;
  
  }
  
  export class DossiersFrauduleux implements IdossiersFrauduleux
  {
    constructor(
      public  ndossier?: string,
      public nFraude?: string,
      public dateGel?: string,
      public dateIdFraude?: string,
      public motifGel?: string,
      public agentTraitant ?: string,
      public dateDecision?: string,
      public status ?: string

    ) {
  
    }
  }
  
  