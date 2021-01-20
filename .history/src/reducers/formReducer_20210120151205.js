const formReducer = (state, action) => {
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
    case "SET_HAS FOCUS":
      return {
        ...state,
        hasFocus: action.payload,
      }
    case "SET FORM SUCCESS":
      return {
        ...state,
        formSuccess: action.payload,
      }
    case "SET FORM FAIL":
      return {
        ...state,
        formFail: action.payload,
      }
    default:
      return
  }
}

export default formReducer
