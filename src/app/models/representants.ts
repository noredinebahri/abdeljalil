
export interface IReprentants {
    idScv?: string;
    natureIdDeposant?: string;
    nId?: string;
    nomAndPrenom?: string;
    nationalite?: string;
    email?: string;
    mobile?: string;

}

export class Reprentants implements IReprentants
{
    constructor(
        public  idScv?: string,
        public natureIdDeposant?: string,
        public nId?: string,
        public nomAndPrenom?: string,
        public nationalite?: string,
        public email?: string,
        public mobile?: string,
    ) {

    }
}

