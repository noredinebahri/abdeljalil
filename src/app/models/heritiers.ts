
export interface IHeritier {
    idScv?: string;
    natureIdDeposantHeritiers?: string;
    nId?: string;
    nomAndPrenom?: string;
    nationalite?: string;
    natureId?: string;
    montantIndem?: number;

}

export class Heritier implements IHeritier
{
    constructor(
        public  idScv?: string,
        public natureIdDeposantHeritiers?: string,
        public nId?: string,
        public nomAndPrenom?: string,
        public nationalite?: string,
        public natureId?: string,
        public montantIndem?: number,
    ) {

    }
}

