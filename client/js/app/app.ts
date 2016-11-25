interface MyProperty {
    name:string;
}

class HelloMessage extends React.Component<MyProperty, string> {

    render() {
        return React.createElement(
        "div",
        null,
        "Hello ",
        this.props.name
        );
    }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "Jane" }), document.querySelector('#react'));