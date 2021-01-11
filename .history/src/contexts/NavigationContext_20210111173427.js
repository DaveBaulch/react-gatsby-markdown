import React from "react"

const Context = React.createContext()

export class NavigationStore extends React.Component {
  state = { isNavActive: false }

  onActiveChange = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <Context.Provider
        value={{
          isActive: this.state.isActive,
          onActiveChange: this.onActiveChange,
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context
