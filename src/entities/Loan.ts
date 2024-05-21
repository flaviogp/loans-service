import { customer, loan } from "../types";

type customerLoans = {
  customer: string
  loans: loan[]
}

interface ILoan {
  hasLoan(customer: customer): customerLoans
}

export default class Loan implements ILoan {
  private loans: loan[] = [];

  constructor(customer: customer) {
    this.hasLoan(customer)
  }

  hasLoan(customer: customer) {
    if (customer.income <= 3000) {
      this.loans.push({
        type: "PERSONAL",
        interest_rate: 4
      }, {
        type: "GUARANTEED",
        interest_rate: 3
      })
    } else if (customer.income >= 3000 && customer.income <= 5000) {
      if (customer.age <= 30) {
        if (customer.location === 'Sao Paulo') {
          this.loans.push({
            type: "PERSONAL",
            interest_rate: 4
          }, {
            type: "GUARANTEED",
            interest_rate: 3
          })
        }
      }
    } else if (customer.income >= 5000) {
      this.loans.push({
        type: "CONSIGNMENT",
        interest_rate: 2
      })
    }

    return {
      customer: customer.name,
      loans: [...this.loans]
    }

  }


}
