const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      }
    case "RESET":
      return {
        ...state,
        name: "",
      }
    default:
      return state
  }
}

export default formReducer
