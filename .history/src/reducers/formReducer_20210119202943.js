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
      case "RESET FORM FIELDS":
        return {
          ...state,
          name: "",
          email: "",
          phone: "",
          disabled: action.payload,
        }
    default:
      return state
  }
}

export default formReducer
