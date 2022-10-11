import { Dispatch } from "react";
import { Product } from "../global/types";
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "./constants";
import { FetchProductsRequest, FetchProductsSuccess, FetchProductsFailure } from './reduxTypes'

export const fetchProductRequest = (): FetchProductsRequest => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductSuccess = (
    response: Product[]
):FetchProductsSuccess => {
    return {type: FETCH_PRODUCTS_SUCCESS, payload: {response}}
}

export const fetchProductFailure = (error: any): FetchProductsFailure => {
    return { type: FETCH_PRODUCTS_FAILURE, payload: { error } }
}

// export const fetchProduct = () => {
//     return async (dispatch: Dispatch) => {
//         try {
//             dispatch(fetchProductRequest())
//             const response: Product[] = await fetch('http://localhost:9590/products').then((response) => response.json())
//             dispatch(fetchProductSuccess(response))
//         } catch (error) {
//             dispatch(fetchProductFailure(error))
//         }
//     }
// }