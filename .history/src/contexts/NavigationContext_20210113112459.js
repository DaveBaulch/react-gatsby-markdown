import React from "react"

const Context = React.createContext()

export class NavigationStore extends React.Component {
  state = { isNavActive: false }

  onNavActiveChange = () => {
    this.setState({ isNavActive: !this.state.isNavActive })
    document.body.classList.toggle("nav-active")
  }

  render() {
    return (
      <Context.Provider
        value={{
          isNavActive: this.state.isNavActive,
          onNavActiveChange: this.onNavActiveChange,
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context
