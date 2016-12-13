'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Alert,
    ListView,
    RefreshControl,
    Dimensions,
    PixelRatio,
    Animated,
    Easing,
    TouchableWithoutFeedback,
    AppRegistry,
}from 'react-native';


import MenuButton from '../../components/js/ImageButton';


export default class ImageButtonEx extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }


    render() {
        return (
            <View>
                <View style={styles.menuView}>
                    <MenuButton renderIcon={require('../../images/wdgz.png')}
                                showText={'我的关注'} tag={'wdgz'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('../../images/wlcx.png')}
                                showText={'物流查询'} tag={'wlcx'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('../../images/cz.png')}
                                showText={'充值'} tag={'cz'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('../../images/dyp.png')}
                                showText={'电影票'} tag={'dyp'}
                                onClick={this._onMenuClick}/>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
    menuView: {
        flexDirection: 'row',
        marginTop: 10
    },
    demo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 30
    }
});



