import React from 'react';
const TextThemeContext = React.createContext();
const ItalicsThemeContext = React.createContext();
const MyContext = React.createContext();

class TextThemeContext2 extends React.Component {
    state = {
        textTheme: "",
        textItalicsTheme: "",
        textReactBlueToggle: false,
        textItalToggle: false
    }

    toggleClick = event => {
        if (event.target.id === "textReactBlue") {
        if (this.state.textTheme === "#61DAFB") {
            this.setState({
            textTheme: "",
            textReactBlueToggle: false
            });
            return;
        }
        this.setState({
            textTheme: "#61DAFB",
            textReactBlueToggle: true
        });
        }
        if (event.target.id === "textItalicized") {
            if (this.state.textItalicsTheme === "italic") {
              this.setState({
                textItalicsTheme: "",
                textItalToggle: false
              });
              return;
            }
            this.setState({
              textItalicsTheme: "italic",
              textItalToggle: true
            });
          }
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    textTheme: this.state.textTheme,
                    textReactBlueToggle: this.state.textReactBlueToggle,
                    textItalicsTheme: this.state.textItalicsTheme,
                    textItalToggle: this.state.textItalToggle,
                    toggleClick: this.toggleClick
                }}
            >
                {this.props.children}
            </MyContext.Provider> 
        )
    }
}


export {TextThemeContext, ItalicsThemeContext, TextThemeContext2, MyContext};