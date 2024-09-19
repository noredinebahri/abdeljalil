export interface IInstructionPaiment {
    numeroBloc?: string;
    numeroDossier?: string;
    numeroInstruction?: string;
    numeroReference?: string;
    modeReglement?: string;
    dateGeneration?: Date;
    dateEnvoi?: Date;
    dateExecution?: Date;
    status?: string;
    motif?: string;
    montant?: string;

  }
  
  export class InstructionPaiment implements IInstructionPaiment{
    constructor(
      public numeroBloc?: string,
      public numeroDossier?: string,
      public numeroInstruction?: string,
      public numeroReference?: string,
      public modeReglement?: string,
      public dateGeneration?: Date,
      public dateEnvoi?: Date,
      public dateExecution?: Date,
      public status?: string,
      public motif?: string,
      public montant?: string,

    ) {
    }
  }
  