import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./constants";
import { Product } from "../types";
import { FetchProductsRequest, FetchProductsSuccess } from './reduxTypes'

export const fetchProductRequest = (): FetchProductsRequest => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const FetchProductSuccess = (
    response: Product[]
):FetchProductsSuccess => {
    return {type: FETCH_PRODUCTS_SUCCESS, payload: {response}}
}