const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      }
    case "RESET f":
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
