import { Request, Response } from "express";

export const get = (req: Request, res: Response) => {

  res.status(200).json({ status: 'ok' })

}


export const post = (req: Request, res: Response) => {

  const customer = req.body

  res.status(200).json({ ...customer })

}
