import { ICustomerLoans, customer, customerLoans, errors, loan } from "../types";



export default class CustomerLoans implements ICustomerLoans {
  private customer: customer;
  private loans: loan[] = [];
  private errors: errors[] = []

  constructor(customer: customer) {
    this.customer = { ...customer }
    this.generateErrors();
    if (this.errors.length >= 1) {
      this.getErrors();
      return;
    };
    this.hasLoan(customer)
  }

  getErrors() {
    return this.errors;
  }

  getCustomerLoans() {
    return {
      customer: this.customer.name,
      loans: [...this.loans]
    }
  }

  generateErrors() {
    const properties = ['income', 'name', 'age', 'location', 'cpf'];
    for (let propertie of properties) {
      if (!this.customer.hasOwnProperty(propertie)) this.errors.push({ type: propertie, msg: `O campo ${propertie} não pode estar vazio!` })
    }
    // if (!this.customer.hasOwnProperty('income')) this.errors.push({ type: 'income', msg: ' salario não pode estar vazio!' })
    //   if (!this.customer.hasOwnProperty('name')) this.errors.push({ type: 'name', msg: ' nome não pode estar vazio!' })
    //   if (!this.customer.hasOwnProperty('age')) this.errors.push({ type: 'age', msg: ' idade não pode estar vazio!' })
    //   if (!this.customer.hasOwnProperty('location')) this.errors.push({ type: 'location', msg: ' local não pode estar vazio!' })
    //   if (!this.customer.hasOwnProperty('cpf')) this.errors.push({ type: 'cpf', msg: ' cpf não pode estar vazio!' })

  }

  hasLoan(customer: customer): void {
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
        if (customer.location === 'Sao Paulo' || customer.location === 'SP') {
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

  }


}
