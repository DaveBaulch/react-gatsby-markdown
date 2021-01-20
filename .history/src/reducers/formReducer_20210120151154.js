const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT_TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      }
    case "HANDLE_FIELD ERROR":
      return {
        ...state,
        [action.field]: action.payload,
      }
    case "CLEAR FIELD ERRORS":
      return {
        ...state,
        nameError: "",
        emailError: "",
        messageError: "",
      }
    case "RESET FORM FIELDS":
      return {
        ...state,
        name: "",
        email: "",
        phone: "",
        message: "",
      }
    case "SET DISABLED":
      return {
        ...state,
        formDisabled: action.payload,
      }
    case "SET HAS FOCUS":
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
