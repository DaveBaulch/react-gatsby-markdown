import {
  HANDLE_INPUT_TEXT,
  HANDLE_FIELD_ERROR,
  CLEAR_FIELD_ERRORS,
  RESET_FORM_FIELDS,
  SET_DISABLED,
  SET_HAS_FOCUS,
  SET_FORM_SUCCESS,
  SET_FORM_FAIL,
} from "./types"

export const handleTextChange = e => {
  dispatch({
    type: HANDLE_INPUT_TEXT,
    field: e.target.name,
    payload: e.target.value,
  })
}

export const handleFieldError = (field, errorStatus) => {
  dispatch({
    type: HANDLE_FIELD_ERROR,
    field: field,
    payload: errorStatus,
  })
}

const clearFormErrors = () => {
  dispatch({
    type: CLEAR_FIELD_ERRORS,
  })
}

export const resetFormFields = () => {
  dispatch({
    type: RESET_FORM_FIELDS,
  })
}

export const setDisabled = status => {
  dispatch({
    type: SET_DISABLED,
    payload: status,
  })
}

export const setHasFocus = element => {
  dispatch({
    type: SET_HAS_FOCUS,
    payload: element,
  })
}

export const setFormSuccess = status => {
  dispatch({
    type: SET_FORM_SUCCESS,
    payload: status,
  })
}

export const setFormFail = status => {
  dispatch({
    type: SET_FORM_FAIL,
    payload: status,
  })
}
