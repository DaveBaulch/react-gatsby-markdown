import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types"
 
HANDLE_INPUT_TEXT = "HANDLE_INPUT_TEXT"
HANDLE_FIELD_ERROR = "HANDLE_FIELD_ERROR"
CLEAR_FIELD_ERRORS = "CLEAR_FIELD_ERRORS"
RESET_FORM_FIELDS = "RESET_FORM_FIELDS"
export const SET_DISABLED = "SET_DISABLED"
export const SET_HAS_FOCUS = "SET_HAS_FOCUS"
export const SET_FORM_SUCCESS = "SET_FORM_SUCCESS"
export const SET_FORM_FAIL = "SET_FORM_FAIL"

const formReducer = (state = {}, action) => {
  switch (action.type) {
    case "HANDLE_INPUT_TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      }
    case "HANDLE_FIELD_ERROR":
      return {
        ...state,
        [action.field]: action.payload,
      }
    case "CLEAR_FIELD_ERRORS":
      return {
        ...state,
        nameError: "",
        emailError: "",
        messageError: "",
      }
    case "RESET_FORM_FIELDS":
      return {
        ...state,
        name: "",
        email: "",
        phone: "",
        message: "",
      }
    case "SET_DISABLED":
      return {
        ...state,
        formDisabled: action.payload,
      }
    case "SET_HAS_FOCUS":
      return {
        ...state,
        hasFocus: action.payload,
      }
    case "SET_FORM_SUCCESS":
      return {
        ...state,
        formSuccess: action.payload,
      }
    case "SET_FORM_FAIL":
      return {
        ...state,
        formFail: action.payload,
      }
    default:
      return
  }
}

export default formReducer
