import React, { Component } from 'react';
import "./PlayerInfo.css";
import PlayingBar from "./PlayingBar";
import fallback from "./fallback.svg"

class PlayerInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {player: null, receivedTime: null};
        const instance = this;
        // noinspection JSUnresolvedVariable
        const ws = new WebSocket("ws://localhost:1356/playerinfo/" + props.guild);
        ws.onmessage = function (msg) {
            instance.setState({
                player: JSON.parse(msg.data),
                receivedTime: new Date() / 1000
            }, null)
        };
        ws.onclose = () => console.log("Websocket disconnected")
    }

    render() {
        let topTrack = null;
        let nextTrack = null;
        console.log(this.state.player);
        if (this.state.player != null) {
            topTrack = this.state.player.queue[0];
            nextTrack = this.state.player.queue[1];
        }

        let image = null;
        if (topTrack != null && topTrack.image != null) {
            image = (<img className="PlayerInfo-image" src={topTrack != null ? topTrack.image : ""} alt=""/>)
        } else {
            image = (<img className="PlayerInfo-image" src={fallback} alt=""/>)
        }

        return (
            <div className="PlayerInfo-page">
                <div className="PlayerInfo">
                    {image}
                    <div className="PlayerInfo-right">
                        <div className="PlayerInfo-track-name">
                            {topTrack == null ? "The queue is empty" : topTrack.name}
                        </div>
                        <PlayingBar track={topTrack} receivedTime={this.state.receivedTime}
                                    receivedPos={this.state.player != null ? this.state.player.playingPos : null}/>
                        <div className="PlayerInfo-coming-up">
                            {nextTrack != null ? "Next: " + nextTrack.name : ""}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerInfo;