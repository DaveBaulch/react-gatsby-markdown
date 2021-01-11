import React from "react"

const Context = React.createContext()

export class NavigationStore extends React.Component {
  state = { isNavActive: false }

  onActiveChange = () => {
    this.setState({ isNavActive: !this.state.isNavActive })
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
