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

import Navigation from '../../components/js/Navigation';

import HomeView3 from './HomeView3';

export default class HomeView2 extends Component{



    gotoNext(message) {
        let self = this;
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                component: HomeView3,
                passProps: {
                    title: "Third",
                    message:"this is came from second page",
                },
                type: "Bottom"
            })
        }
    }


    render() {
        return (

            <View style={{flex: 1,marginTop: 0}}>
                <Navigation  {...this.props}/>
                <View style={styles.container}>

                    <Text>
                        HomeView2 {this.props.message}
                    </Text>

                    <TouchableOpacity onPress={()=>this.gotoNext('(came from homeView2)')}>
                        <Text>go to third</Text>
                    </TouchableOpacity>
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
        backgroundColor:'#AFEEEE'
    },

});

