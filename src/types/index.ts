export type customer = {
  name: string;
  age: number;
  income: number;
  location: string;
  cpf: string;
}


export type loan = {
  type: "PERSONAL" | "GUARANTEED" | "CONSIGNMENT";
  interest_rate: number
}

export type customerLoans = {
  customer: string
  loans: loan[]
}

export interface ICustomerLoans {
  hasLoan(customer: customer): customerLoans
}

