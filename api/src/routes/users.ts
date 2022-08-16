import { Router } from 'express'
import { getAllUsers, googleAuthenticate } from '../controllers/users'
import passport from 'passport'

const router = Router()

router.get('/', getAllUsers)
router.post(
  '/google-authenticate',
  passport.authenticate('google-id-token', { session: false }),
  googleAuthenticate
)

export default router
