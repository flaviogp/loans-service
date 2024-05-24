import { Request, Response } from "express";
import CustomerLoans from "../entities/CustomerLoans";


export const post = (req: Request, res: Response) => {

  const reqCustomer = req.body
  const customerLoans = new CustomerLoans(reqCustomer)
  if (customerLoans.getErrors().length >= 1) res.status(400).json(customerLoans.getErrors())

  res.status(200).json(customerLoans.getCustomerLoans())

}
