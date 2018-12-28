import React, { Component } from 'react';

class PlayingBar extends Component {
    render() {
        return (
            <div className="PlayingBar">
                00:12
                <div className="PlayingBar-progress">
                    <div className="PlayingBar-inner" style={{width: "33%"}}/>
                </div>
                01:00
            </div>
        )
    }
}

export default PlayingBar;