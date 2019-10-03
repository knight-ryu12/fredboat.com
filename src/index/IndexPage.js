import React, {Component} from 'react';
import Header from "../common/Header";
import "./css/IndexPage.css";
import logo from "../logo/logo.svg";
import FeatureDescription from "./FeatureDescription";
import FontAwesome from 'react-fontawesome';
import FaButton from "../common/FaButton";
import MobileHeader from "../common/MobileHeader";
import Footer from "../common/Footer";

class Index extends Component {
    //noinspection JSMethodCanBeStatic
    render() {

        return (
            <div>
                <Header/>
                <div className="index-page-body">
                    <MobileHeader/>
                    <div className="feature-section index-top">
                        <div className="feature-section-inner">
                            <div className="feature-deco">
                                <div className="logo-wrapper">
                                    <img className="logo" src={logo} alt="Logo" draggable="false"/>
                                </div>
                            </div>
                            <FeatureDescription title="やっほー！FredBoat♪♪"
                                                text="FredBoatは、Discordサーバーに高品質の音楽を配信する無料のDiscord音楽ボットです。
                            設定なしで簡単に音楽ボットをDiscordサーバーに追加できます。"
                                                under={
                                                    (
                                                        <div>
                                                            <FaButton
                                                                to="https://goo.gl/cFs5M9"
                                                                text="Add to Discord" icon="sign-in"
                                                                color="rgb(114, 137, 218)"/>
                                                            <FaButton to="/docs" text="Read the docs" icon="book"
                                                                      color="#3399ff"/>
                                                        </div>
                                                    )}/>
                        </div>
                    </div>

                    <div className="feature-section">
                        <div className="feature-section-inner">
                            <FeatureDescription title="幅広いメディアをサポート"
                                                text="FredBoatは、YouTube、SoundCloud、BandCamp、ダイレクトリンク、Twitchの音楽を再生できます。 もちろんプレイリストとライブストリームもサポートしています！"/>
                            <div className="feature-deco">
                                <div className="feature-sources">
                                    <div>
                                        <FontAwesome name="youtube-play"/>
                                        <FontAwesome name="soundcloud"/>
                                    </div>
                                    <div>
                                        <FontAwesome name="bandcamp"/>
                                        <FontAwesome name="twitch"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-section">
                        <div className="feature-section-inner">
                            <div className="feature-deco">
                                <div className="feature-search">
                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <FontAwesome name="search"/>
                                    </div>
                                    <div>
                                        <FontAwesome name="youtube-play"/>
                                        <FontAwesome name="soundcloud"/>
                                    </div>
                                </div>
                            </div>
                            <FeatureDescription title="YouTubeやSoundCloudによる検索"
                                                text="トラックの直接リンクの代わりに、単に曲の名前を入力するだけで、FredBoatが曲を見つけられるようにすることもできます。"/>
                        </div>
                    </div>

                    <div className="feature-section">
                        <div className="feature-section-inner">
                            <FeatureDescription title="シャッフルとリピート"
                                                text="FredBoatは、プレイリストのシャッフルを完全にサポートしています。キューを1つだけ、またはキュー全体を繰り返すこともできます。"/>
                            <div className="feature-deco">
                                <FontAwesome name="random" style={{fontSize: "7em", marginRight: "25px"}}/>
                                <FontAwesome name="repeat" style={{fontSize: "7em"}}/>
                            </div>
                        </div>
                    </div>

                    <div className="feature-section">
                        <div className="feature-section-inner">
                            <div className="feature-deco">
                                <FontAwesome name="lock" style={{fontSize: "10em"}}/>
                            </div>
                            <FeatureDescription title="簡単でセキュアな権限システム"
                                                text="FredBoatは当初、小規模サーバーで使いやすいように作成されましたが、大規模サーバーの管理者である場合は、キューを変更できるユーザーを制限することで、荒らしを抑えることができます。"
                                                under={
                                                    (
                                                        <div>
                                                            <FaButton to="/docs/permissions"
                                                                      text="権限についてもっと知る"
                                                                      icon="book" color="#3399ff"/>
                                                        </div>
                                                    )}/>
                        </div>
                    </div>

                    <div className="feature-section">
                        <div className="feature-section-inner">

                            <FeatureDescription title="完全なオープンソース"
                                                text="開発が始まって以来、FredBoatは常にオープンソースです！ つまり、FredBoatはコミュニティによって形成され、上級者は独自のFredBoatをホストすることもできます。"
                                                under={
                                                    (
                                                        <div>
                                                            <FaButton to="https://github.com/Frederikam/FredBoat"
                                                                      text="View the source code" icon="github"
                                                                      color="#3399ff"/>
                                                        </div>
                                                    )}/>
                            <div className="feature-deco">
                                <FontAwesome name="github" style={{fontSize: "10em"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Index;