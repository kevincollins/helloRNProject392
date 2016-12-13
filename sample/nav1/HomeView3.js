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

export default class HomeView3 extends Component{

    render() {
        return (
            <View style={styles.container}>

                <Text>
                    HomeView3 {this.props.message}
                </Text>


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

