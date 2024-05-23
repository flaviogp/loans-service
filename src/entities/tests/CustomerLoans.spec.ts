import CustomerLoans from "../CustomerLoans"

describe('CoustomerLoans', () => {
  test('should not return the consignment loan', () => {
    const expectCustomerLoans = {
      "customer": "Vuxaywua Zukiagou",
      "loans": [
        {
          "type": "PERSONAL",
          "interest_rate": 4
        },
        {
          "type": "GUARANTEED",
          "interest_rate": 3
        },
      ]
    }
    const customer = {
      "age": 26,
      "cpf": "275.484.389-23",
      "name": "Vuxaywua Zukiagou",
      "income": 400.00,
      "location": "SP"
    }
    const customerLoans = new CustomerLoans(customer)
    expect(customerLoans).toMatchObject(expectCustomerLoans)
  })
  test('should not return the guaranteed and personal loan', () => {
    const expectCustomerLoans = {
      "customer": "Vuxaywua Zukiagou",
      "loans": [
        {
          "type": "CONSIGNMENT",
          "interest_rate": 2
        },
      ]
    }
    const customer = {
      "age": 32,
      "cpf": "275.484.389-23",
      "name": "Vuxaywua Zukiagou",
      "income": 5100.00,
      "location": "SP"
    }
    const customerLoans = new CustomerLoans(customer)
    expect(customerLoans).toMatchObject(expectCustomerLoans)
  })
})
