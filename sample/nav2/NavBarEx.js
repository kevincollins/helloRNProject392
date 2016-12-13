/**
 * Created by kehl on 16/9/29.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';


import NavBar from '../../components/js/NavBar';

export default class NavBarEx extends Component {


    constructor(props) {
        super(props);

    }

    _tabChangedCallback(i) {
        console.log( " click callback at : " + i);

        alert("selected is: " + i);
    }

    render() {

        const tabText=["待接单","进行中","待评价"];

        let tabs = [];
        for(let i=0;i<tabText.length;i++){
            tabs.push({"text":tabText[i]});
        }

        return (
            <View>
                <View style={{marginTop:50}}/>
                <NavBar ref="tab" tabs={tabs} height={40} backgroundColor='#ffffff' callback={this._tabChangedCallback.bind(this)}/>
            </View>
        );
    }

}
