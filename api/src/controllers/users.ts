import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import User, { UserDocument } from '../models/users'
import UserServices from '../services/users'
import { JWT_SECRET } from '../util/secrets'
import { BadRequestError, ForbiddenError } from '../helper/apiError'
import bcrypt from 'bcrypt'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.email) {
      next(new BadRequestError('Missing email address'))
    }
    const existUserEmail = await UserServices.findOrCreate(req.body.email)
    if (existUserEmail) {
      next(new BadRequestError('Selected e-mail already have an account.'))
    }
    if (!req.body.password) {
      next(new BadRequestError('Missing password'))
    }
    const { firstname, lastname, email, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    })
    await UserServices.createUser(user)
    res.json(user)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const userId = req.params.userId
    const updatedUser = await UserServices.updateUser(userId, update)
    res.json(updatedUser)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Inavalid Request', error))
    } else {
      next(error)
    }
  }
}

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await UserServices.deleteUser(req.params.userId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserServices.findById(req.params.userId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserServices.getUsers())
  } catch (error) {
    console.log(error, ' on controller module')
  }
}

export const googleAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userGoogleData = req.user as UserDocument
    const { email, _id, name } = userGoogleData
    const token = jwt.sign(
      {
        email,
        _id,
        name,
      },
      JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )
    res.json({ token, userGoogleData })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const passwordLogIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.email) {
      throw new BadRequestError('An email address is required.')
    }
    const foundUser = await UserServices.findUserByEmail(req.body.email)
    if (foundUser?.isBanned === true) {
      throw new ForbiddenError('The selected user is currently banned.')
    }
    if (foundUser?.loginWith === 'google') {
      throw new BadRequestError('The selected user was registered by Google Login.')
    }
    if (!req.body.password) {
      throw new BadRequestError('Password is a required field.')
    }
    const userData = await UserServices.findUserByEmail(req.body.email)
    if (!userData) {
      throw new BadRequestError('There is no registered user with the selected email.')
    }
    const match = await bcrypt.compare(userData.password, req.body.password)
    if (!match) {
      throw new BadRequestError('Wrong password')
    }
    const token = jwt.sign(
      {
        email: req.body.email,
        _id: userData._id,
        firstName: userData.name.firstname,
      },
      JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )
    res.json({token, userData})
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const banUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId
    await UserServices.banUser(userId)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const turnAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId
    await UserServices.admin(userId)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
