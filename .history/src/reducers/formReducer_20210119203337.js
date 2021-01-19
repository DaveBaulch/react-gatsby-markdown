const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      }
    case "HANDLE FIELD ERROR":
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
        disabled: action.payload,
      }
    case "SET HAS FOCUS":
      return {
        ...state,
        hasFocus: action.payload,
      }
    default:
      return s
  }
}

export default formReducer
