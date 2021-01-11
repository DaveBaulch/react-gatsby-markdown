import React from "react"

const Context = React.createContext()

export class ContactStore extends React.Component {
  state = { isContactActive: false }

  onContactActiveChange = () => {
    this.setState({ isContactActive: !this.state.isContactActive })
  }

  render() {
    return (
      <Context.Provider
        value={{
          isContactActive: this.state.isActive,
          onActiveChange: this.onActiveChange,
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context
