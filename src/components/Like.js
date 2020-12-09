import React, { Component } from 'react';

class Like extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div className="row mb-3">
                <div className="col-12 d-flex">
                    <button
                        className="neomorphic"
                        onClick={() => this.setState({
                            count: this.state.count > 0 ? this.state.count - 1 : 0
                        })}
                    >👎🏽</button>
                    <h4 className="mr-2 ml-2">{ this.state.count }</h4>
                    <button
                        className="neomorphic"
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
