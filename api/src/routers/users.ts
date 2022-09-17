import { Router } from 'express'

import passport from 'passport'
import {
  getAllUsers,
  googleAuthenticate,
  createUser,
  findById,
  deleteUser,
  updateUser,
  banUser,
  makeAdmin,
  logInWithPasswordController,
} from '../controllers/users'
import adminCheck from '../middlewares/admin'

const router = Router()

router.post('/', createUser)
router.put(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  updateUser
)
router.patch(
  '/:userId/ban-user',
  passport.authenticate('jwt', { session: false }),
  adminCheck,
  banUser
)
router.patch(
  '/:userId/make-admin',
  passport.authenticate('jwt', { session: false }),
  adminCheck,
  makeAdmin
)
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  adminCheck,
  getAllUsers
)
router.post('/login', logInWithPasswordController)
router.get(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  findById
)
router.delete('/:userId', deleteUser)
router.post(
  '/google-authenticate',
  passport.authenticate('google-id-token', { session: false }),
  googleAuthenticate
)

export default router
