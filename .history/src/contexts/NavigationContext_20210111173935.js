import React from "react"

const Context = React.createContext()

export class NavigationStore extends React.Component {
  state = { isNavActive: false }

  onNavActiveChange = () => {
    this.setState({ isNavActive: !this.state.isNavActive })
  }

  render() {
    return (
      <Context.Provider
        value={{
          isNavActive: this.state.isNavActive,
          onNavActiveChange: this.onActiveChange,
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context
