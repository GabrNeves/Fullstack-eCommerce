import { ActionTypes } from "../reduxTypes";

const initialState = {
    products: [],
    error: null,
    loading: false,
}

const reducer = (state = initialState, action: ActionTypes) => {
    const ActionType = action.type

}

export default reducer