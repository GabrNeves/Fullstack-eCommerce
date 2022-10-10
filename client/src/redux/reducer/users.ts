//
import { ActionTypes } from "../reduxTypes";

const initialState = {
    user: [],
    error: null,
    loading: false,
}

const reducer = (state = initialState, action: ActionTypes) => {
    const ActionType = action.type

}

export default reducer