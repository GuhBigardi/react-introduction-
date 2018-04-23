import React, { Component } from 'react';

class Partida extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.estadio}</h2>
                <div>
                    <span>{this.props.data}</span>
                    <span> - </span>
                    <span>{this.props.hora}</span>
                </div>
            </div>
        );
    }
}

export default Partida;