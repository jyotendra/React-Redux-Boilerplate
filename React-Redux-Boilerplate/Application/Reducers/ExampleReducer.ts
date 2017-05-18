import * as types from "../Actions/ActionTypes";

const INITIAL_STATE = {
    PageNo: 1,
    TotalPages: 0
};

export default function ExampleReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case types.CHANGE_PAGE:
            return Object.assign({}, state, { PageNo: action.index});

        case types.NEXT_PAGE:
            return Object.assign({}, state, { PageNo: state.PageNo + 1 });

        default:
            return state;
    }

}