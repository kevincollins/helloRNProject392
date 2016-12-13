/**
 * Created by kehl on 16/8/29.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Navigator,
} from 'react-native';

import Navigation from '../../components/js/Navigation';



export default class HomeView3 extends Component {

    render() {
        return (

            <View style={{flex: 1, marginTop: 0}}>
                <Navigation  {...this.props}/>
                <View style={styles.container}>

                    <Text>
                        HomeView3 . {this.props.message}
                    </Text>

                </View>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    // 页面框架
    container: {
        flex: 1,
        // marginTop: 100,
        backgroundColor:'#F5F5F5'
    },

});

