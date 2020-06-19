import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Clock extends Component {
    state = {};

    componentDidMount() {
        this.countId = setInterval(() => {
            const date = new Date();
            const hourse = date.getHours() + this.props.clock.zone;
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            this.setState({ hourse, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.countId);
    }

    handleRemove = evt => {
        this.props.handleRemoveClock(this.props.clock.name);
    };

    render() {
        return (
            <div className="clock">
                <div className="zone">{ this.props.clock.name }</div>
                <div className="time">
                    { `${ this.state.hourse ?? 0 }:${ this.state.minutes ?? 0 }:${ this.state.seconds ?? 0 }` }
                </div>
                <button type="button" onClick={ this.handleRemove }>remove</button>
            </div>
        );
    }
}

Clock.propTypes = {
    props: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired
    })
};

