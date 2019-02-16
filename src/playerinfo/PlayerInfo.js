import React, { Component } from 'react';
import "./PlayerInfo.css";
import PlayingBar from "./PlayingBar";
import fallback from "./fallback.svg"

class PlayerInfo extends Component {

    websocket = null;
    emptyState = {player: null, receivedTime: null};

    constructor(props) {
        super(props);
        this.state = this.emptyState;
        this.connect(props);

        setInterval(() => {
            if (this.websocket.readyState === this.websocket.CLOSED) this.connect(props)
        }, 2000);
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

    connect(props) {
        const instance = this;
        this.websocket = new WebSocket("wss://gateway.fredboat.com/playerinfo/" + props.guild);
        this.websocket.onmessage = function (msg) {
            instance.setState({
                player: JSON.parse(msg.data),
                receivedTime: new Date() / 1000
            }, null)
        };
        this.websocket.onclose = () => {
            console.log("Websocket disconnected");
            instance.setState(instance.emptyState)
        };
        this.websocket.onabort = (event) => {
            console.log("Websocket errored ", event);
            instance.setState(instance.emptyState)
        }
    }
}

export default PlayerInfo;