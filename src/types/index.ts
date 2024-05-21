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
