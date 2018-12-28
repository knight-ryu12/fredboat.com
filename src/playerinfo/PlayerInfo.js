import React, { Component } from 'react';
import "./PlayerInfo.css";
import PlayingBar from "./PlayingBar";

class PlayerInfo extends Component {
    render() {
        return (
            <div className="PlayerInfo-page">
                <div className="PlayerInfo">
                    <img className="PlayerInfo-image" src="https://i.ytimg.com/vi/zNRbP7U0Iq8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDX2XAJghjO0WgVyOJAg3BIFSlMWg"/>
                    <div className="PlayerInfo-right">
                        <div className="PlayerInfo-track-name">
                            Track name
                        </div>
                        <PlayingBar/>
                        <div className="PlayerInfo-coming-up">
                            Coming up: ASD
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerInfo;