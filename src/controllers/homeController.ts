import { Request, Response } from "express";
import CustomerLoans from "../entities/CustomerLoans";


export const post = (req: Request, res: Response) => {

  const customer = req.body

  const customerLoans = new CustomerLoans(customer)

  console.log(customerLoans)
  res.status(200).json(customerLoans)

}
