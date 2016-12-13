/**
 * Created by kehl on 16/10/18.
 */


'use strict';

import React, {Component} from 'react';
import {
    Navigator,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
    AppRegistry,
} from 'react-native';

let gestureHandlers = {};

let initColor = "green";

export default class ResponderEx extends Component {
    constructor(props, context) {
        super(props, context);
        this.config = {
            changeX: 0,
            changeY: 0,
            xDiff: 0,
            yDiff: 0
        }
        this.state = {
            bg: initColor,
            left: 0,
            top: 0
        }
    }

    componentWillMount() {
        gestureHandlers = {
            onStartShouldSetResponder: (e) => {
                console.log(e.nativeEvent);
                console.log("start");
                return true
            },
            onMoveShouldSetResponder: (e) => {
                console.log("move begin");
                return true
            },
            onResponderGrant: (e) => {
                console.log("grant");
                this.config.changeY = e.nativeEvent.pageY;
                this.config.changeX = e.nativeEvent.pageX;
                this.setState({bg: 'red'});
            },
            onResponderMove: (e) => {
                console.log("moving");
                this.config.yDiff = e.nativeEvent.pageY - this.config.changeY;
                this.config.xDiff = e.nativeEvent.pageX - this.config.changeX;
                this.state.left = this.state.left + this.config.xDiff;
                this.state.top = this.state.top + this.config.yDiff;
                this.config.changeY = e.nativeEvent.pageY;
                this.config.changeX = e.nativeEvent.pageX;
                this.setState({left: this.state.left, top: this.state.top});
            },
            onResponderRelease: (e) => {
                console.log("release");
                this.setState({bg: initColor})
            }
        }
    }

    render() {
        console.log("begin render");
        return (
            <View style={{backgroundColor:'#f2f2f2',flex:1}}>
                <Text>Begin</Text>
                <View
                    {...gestureHandlers}
                    style={[styles.rect, {
                        "backgroundColor": this.state.bg,
                        "left": this.state.left,
                        "top": this.state.top
                    }]}>
                </View>
            </View>
        );
    }
}


var styles = StyleSheet.create({

    rect: {
        width: 100,
        height: 100,
    }
});

