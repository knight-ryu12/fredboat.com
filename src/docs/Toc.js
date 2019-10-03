import React, { Component } from 'react';
import "./css/Toc.css";
import TocHeader from "./TocHeader";

class Toc extends Component {
    render() {
        return (
            <div className="Toc">
                <div className="toc-inner">
                    <div className="toc-title">
                        Contents
                    </div>
                    <TocHeader activePage={this.props.page} page="index" name="クイックスタート"/>
                    <TocHeader activePage={this.props.page} page="donate" name="寄付"/>
                    {/*</TocHeader activePage={this.props.page} page="cedge" name="Beta testing"/>*/}
                    <TocHeader activePage={this.props.page} page="merch" name="Merchandise"/>
                    <TocHeader activePage={this.props.page} page="configuration" name="設定"/>
                    <TocHeader activePage={this.props.page} page="permissions" name="権限"/>
                    {/*<TocHeader activePage={this.props.page} page="music" name="Music commands"/>*/}
                    <TocHeader activePage={this.props.page} page="non_music" name="その他のコマンド"/>
                    <TocHeader activePage={this.props.page} page="faq" name="FAQ"/>
                    <TocHeader activePage={this.props.page} page="terms" name="利用規約"/>

                    <div className="toc-separator"/>
                    <h2>Advanced</h2>

                    <TocHeader activePage={this.props.page} page="selfhosting" name="セルフホスティング"/>
                    <TocHeader activePage={this.props.page} page="systemdservice" name="セルフホスティング (systemd)"/>
                </div>
            </div>
        )
    }
}

export default Toc;
