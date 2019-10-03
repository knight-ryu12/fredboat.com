import React, {Component} from 'react';
import "./css/Callback.css";
import Header from "../common/Header";
import FontAwesome from 'react-fontawesome';
import FaButton from "../common/FaButton";
import MobileHeader from "../common/MobileHeader";
import Footer from "../common/Footer";

class Callback extends Component {
    //noinspection JSMethodCanBeStatic
    render() {
        let music = this.props.music;

        let title = music ? "FredBoatMusicが正常に追加されました" : "FredBoatが正常に追加されました";
        let desc = music ? "まだ読んでいない場合は、ドキュメントを読んで使用できるコマンドの一部を確認してください。"
            : "しかし！ まだFredBoatの非音楽バージョンを追加たばかりです。もしあなたが音楽を再生したいなら,下の紫色のボタンをクリックしてください。";
        let lowerDesc = music ? "FredBoatをお楽しみください♪♪" : "FredBoatをお楽しみください！";
        let docsLink = music ? "/docs" : "/docs/non_music";
        let addBtnText = music ? "他のサーバーにも追加する" : "音楽ボットを追加する";

        let error = window.location.search.substr(1).includes("error");
        if(error) {
            title = "Discordがエラーを返したようです...";
            desc = "これは通常、認証ダイアログで「キャンセル」を押すと発生します。";
            lowerDesc = null;
            addBtnText = "音楽ボットを追加する";
        }

        return (
            <div className="Callback">
                <Header/>
                <div className="callback-page">
                    <MobileHeader/>
                    <div className="callback-title">
                        <FontAwesome name={error ? "times" : "check"}/>
                        <span>{title}</span>
                    </div>
                    <div className="callback-lower">
                        <p>{desc}</p>
                        <p>{lowerDesc}</p>
                        <div className="buttons">
                            <FaButton to={docsLink} icon="book" text="Commands" color="#1CBFE2"/>
                            <FaButton to="https://goo.gl/cFs5M9"
                                      icon="sign-in" text={addBtnText} color="#7289DA"/>
                            <FaButton to="/docs/donate" icon="money" text="Donate" color="rgb(249, 104, 84)"/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Callback;