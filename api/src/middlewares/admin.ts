import { Response, Request, NextFunction } from 'express'
import { ForbiddenError } from '../helper/apiError'
import { UserDocument } from '../models/users'

const adminCheck = async (res: Response, req: Request, next: NextFunction) => {
    const userData = req.user as UserDocument
    const adm = userData.admin
    if (adm) {
        next()
    } else {
        throw new ForbiddenError()
    }
}

export default adminCheck