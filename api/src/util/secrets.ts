import dotenv from 'dotenv'
import fs from 'fs'

import logger from './logger'

export const JWT_SECRET = process.env.JWT_SECRET as string