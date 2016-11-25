class HelloMessage extends React.Component<string, string> {

    render() {
        return React.createElement(
        "div",
        null,
        "Hello ",
        this.props.name
        );
    }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "Jane" }), document.querySelector('#react'););