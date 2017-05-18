    import * as types from "./ActionTypes";

    export function BeginAjaxCall() {
        return {type: types.BEGIN_AJAX};
    }

    export function AjaxError(err) {
        return { type: types.AJAX_CALL_ERROR, err };
    }