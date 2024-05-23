import { ICustomerLoans, customer, loan } from "../types";



export default class CustomerLoans implements ICustomerLoans {
  private customer = ''
  private loans: loan[] = [];

  constructor(customer: customer) {
    this.customer = customer.name
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
    }
    if (customer.income >= 3000 && customer.income <= 5000) {
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
    }
    if (customer.income >= 5000) {
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
