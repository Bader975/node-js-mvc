
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

interface IUser {
  id: string;
  name:string
}

const protect = (req: Request, res: Response, next: NextFunction) => {
  try { 
    const header = req.headers.authorization;
  
    if (!header) {
      return res.status(401).json({
        message: 'Invalid authorization header '
      });
    }
    
    const user = jwt.verify(header, process.env.MY_SECRETKEY as string) as IUser;

    res.locals.user = user as IUser ;

    next();
  } catch (error) {
    return res.status(401).json({
      message:' access denied'
    });
  }
};



export { protect };