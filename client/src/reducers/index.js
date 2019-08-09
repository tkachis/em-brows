import { combineReducers } from 'redux'

import image from './image'
import auth from './auth'
import alert from './alert'

export default combineReducers({ image, auth, alert })
