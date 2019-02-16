import React, { Component } from 'react';

class PlayingBar extends Component {
    render() {
        if (this.props.track == null) {
            return (
                <div className="PlayingBar">
                    00:00
                    <div className="PlayingBar-progress">
                        <div className="PlayingBar-inner" style={{width: "0"}}/>
                    </div>
                    00:00
                </div>
            )
        }

        const durationSec = this.props.track.duration / 1000;
        const sinceMessage = new Date() / 1000 - this.props.receivedTime;
        const timePlayed = this.props.receivedPos / 1000 + sinceMessage;
        const percentComplete = (timePlayed / durationSec) * 100 + "%";
        const useHours = durationSec >= 60*60;

        return (
            <div className="PlayingBar">
                {PlayingBar.formatTime(timePlayed, useHours)}
                <div className="PlayingBar-progress">
                    <div className="PlayingBar-inner" style={{width: percentComplete}}/>
                </div>
                {PlayingBar.formatTime(durationSec, useHours)}
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
         setTimeout(() => this.forceUpdate(), 200)
    }

    static formatTime(seconds, useHours) {
        const hours = PlayingBar.format0(seconds / (60*60));
        const minutes = PlayingBar.format0((seconds % (60*60)) / 60);
        const remainder = PlayingBar.format0(seconds % 60);

        let str = minutes + ":" + remainder;
        if (useHours) {
            str = hours + ":" + str
        }
        return str
    }

    static format0(num) {
        return num < 10 ? "0" + Math.floor(num) : Math.floor(num)
    }
}

export default PlayingBar;