import { Request, Response } from "express";
import CustomerLoans from "../entities/CustomerLoans";

export const get = (req: Request, res: Response) => {

  res.status(200).json({ status: 'ok' })

}


export const post = (req: Request, res: Response) => {

  const customer = req.body

  const customerLoans = new CustomerLoans(customer)

  console.log(customerLoans)
  res.status(200).json(customerLoans)

}
