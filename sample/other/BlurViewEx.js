/**
 * Created by kehl on 16/11/8.
 *
 * for android, ios 貌似也可以用
 *
 */


import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

import BlurView from 'react-native-vunun-blur';

var background = 'http://images.daojia.com/dop/custom/n_v1bj3gzsag3b2fpuann47a_57cee08ce7bef021.jpg';

export default class BlurViewEx extends Component {
    render() {
        return (
            <Image source={{uri:background}} style={{width:400,height:200}}>
                <BlurView blurType="light" blurRadius={30} style={styles.container}>
                    <Text style={styles.welcome}>Blur light</Text>
                </BlurView>
            </Image>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF',
    },
});

