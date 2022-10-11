import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE} from './constants'
import { Product } from '../global/types'

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

export type FetchProductsFailure = {
    type: typeof FETCH_PRODUCTS_FAILURE,
    payload: {
      error: any,
    }
  }