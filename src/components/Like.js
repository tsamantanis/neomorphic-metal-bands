import React, { Component } from 'react';

class Like extends Component {
    constructor() {
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <button
                        onClick={() => this.setState({
                            count: this.state.count > 0 ? this.state.count - 1 : 0
                        })}
                    >👎🏽</button>
                    <h4>{ this.state.count }</h4>
                    <button
                        onClick={() => this.setState({
                            count: this.state.count + 1
                        })}
                    >👍🏽</button>
                </div>
            </div>
        );
    }
}

export default Like;
