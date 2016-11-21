import React, { findDOMNode, Component, PropTypes } from 'react'

export default class AddTodo extends Component {
    handleClick(e){
        const node = findeDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = ''
    }
    render() {
        return (
            <div>
                <input type="text" ref="input" />
                <button onClick={ e => this.handleClick(e)}>
                    Add
                </button>
            </div>
            )
    }

    AddTodo.PropTypes = {
        onAddClick: PropTypes.func.isRequired
    }
}