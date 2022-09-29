import { combineReducers } from "redux";
import products from './products'
import users from './users'

const createRootReducer = () => {
    combineReducers({ products, users })
}

export default createRootReducer