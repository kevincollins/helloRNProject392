/**
 * Created by kehl on 16/8/29.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Navigator,
} from 'react-native';


import HomeView3 from './HomeView3';

export default class HomeView2 extends Component{

    gotoNext(message, type = 'Normal') {
        this.props.navigator.push({
            component: HomeView3,
            name:"Third",
            passProps: {
                message: message
            },
            //onPress: this.onPressRight,
            //rightText: 'DONE',
            type: type
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <Text>
                    HomeView2 {this.props.message}
                </Text>

                <TouchableOpacity onPress={()=>this.gotoNext('(came from homeView2)')}>
                    <Text>go to third</Text>
                </TouchableOpacity>
            </View>
        );
    }

}



var styles = StyleSheet.create({
    // 页面框架
    container: {
        flex: 4,
        marginTop: 100,
        flexDirection: 'column'
    },

});

