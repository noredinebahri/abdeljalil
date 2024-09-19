export interface AccountData {
  label: string |null;
  accountNumber: string |null;
  balance: number |null;
  baseIndemnisation: number |null;
}

export interface SettlementData {
  description: string |null;
  amount: number |null;
  indemnisation: number;
}
