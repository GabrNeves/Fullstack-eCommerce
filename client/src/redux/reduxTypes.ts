import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS} from './constants'
import { Product } from '../types'

export type ActionTypes = FetchProductsRequest | FetchProductsSuccess

export type FetchProductsRequest = {
    type: typeof FETCH_PRODUCTS_REQUEST
}

export type FetchProductsSuccess = {
    type: typeof FETCH_PRODUCTS_SUCCESS
    payload: {
        response: Product[]
    }
}