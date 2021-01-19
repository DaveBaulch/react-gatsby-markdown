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
        nameError: null,
        emailError: null,
        messageError: null,
      }
    case "RESET FORM FIELDS":
      return {
        ...state,
        name: "",
        email: "",
        phone: "",
        message: "",
      }
    default:
      return state
  }
}

export default formReducer
