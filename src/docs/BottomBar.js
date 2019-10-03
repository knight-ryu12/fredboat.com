import React, { Component } from 'react';
import "./css/BottomBar.css";
import BottomBarButton from "./BottomBarButton";

class BottomBar extends Component {
    render() {
        return (
            <div className="BottomBar">
                <BottomBarButton activePage={this.props.page} icon="music" page="index" name="クイックスタート"/>
                <BottomBarButton activePage={this.props.page} icon="money" page="donate" name="寄付"/>
                <BottomBarButton activePage={this.props.page} icon="cog" page="configuration" name="設定"/>
                <BottomBarButton activePage={this.props.page} icon="lock" page="permissions" name="権限"/>
                <BottomBarButton activePage={this.props.page} icon="ellipsis-h" page="non_music" name="その他のコマンド"/>
                <BottomBarButton activePage={this.props.page} icon="question" page="faq" name="FAQ"/>
                <BottomBarButton activePage={this.props.page} icon="legal" page="terms" name="利用規約"/>
                <BottomBarButton activePage={this.props.page} icon="terminal" page="selfhosting" name="セルフホスティング"/>
                <BottomBarButton activePage={this.props.page} icon="terminal" page="systemdservice" name="セルフホスティング (systemd)"/>
            </div>
        )
    }
}

export default BottomBar;
