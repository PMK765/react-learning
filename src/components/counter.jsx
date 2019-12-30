import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
    };

    styles = {
        fontSize: 30,
        fontWeight: "bold"
    };

    handleClick = () => {
        // setState takes an object
        this.setState({count: this.state.count + 1})
    }
    render() {
        return (
        <React.Fragment>
            <img src={this.state.imageURL} alt=""></img>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.handleClick()} className="btn btn-secondary btn-sm">Increment</button>
            <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </React.Fragment>);
    }

    getBadgeClasses() {
        let classes = `badge m-2 badge-`;
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;
