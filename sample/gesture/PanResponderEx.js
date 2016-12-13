/**
 * Created by kehl on 16/9/9.
 */


'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    StyleSheet,
    Dimensions,
    PixelRatio,
    ScrollView,
    ListView,
    RefreshControl,
    Animated,
    Easing,
    PanResponder,
    processColor,
    Platform,
    NativeModules,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    AppRegistry,
}from 'react-native';


var CIRCLE_SIZE = 80;
var CIRCLE_COLOR = 'green';
var CIRCLE_HIGHLIGHT_COLOR = 'gray';


export default class PanResponderEx extends Component {

    _previousLeft = 0;
    _previousTop = 0;

    _panResponder = {};
    circle = {};

    constructor(props) {
        super(props);

        this._handlePanResponderGrant = this._handlePanResponderGrant.bind(this);
        this._handlePanResponderMove = this._handlePanResponderMove.bind(this);
        this._handlePanResponderEnd = this._handlePanResponderEnd.bind(this);


        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminate: this._handlePanResponderEnd,
        });

        this._circleStyles = {
            style: {
                left: this._previousLeft,
                top: this._previousTop
            }
        };
    }

    componentWillMount() {
        console.log("1111 will ");
    }

    componentDidMount() {
        console.log("22222 did ");
        this._updatePosition();
    }

    _highlight() {
        const circle = this.circle;
        circle && circle.setNativeProps({
            style: {
                backgroundColor: CIRCLE_HIGHLIGHT_COLOR
            }
        });
    }

    _unHighlight() {
        const circle = this.circle;
        circle && circle.setNativeProps({
            style: {
                backgroundColor: CIRCLE_COLOR
            }
        });
    }

    _updatePosition() {
        this.circle && this.circle.setNativeProps(this._circleStyles);
    }


    _handlePanResponderGrant() {
        this._highlight();
    }


    _handlePanResponderMove(e, gestureState) {
        this._circleStyles.style.left = this._previousLeft + gestureState.dx;
        this._circleStyles.style.top = this._previousTop + gestureState.dy;
        this._updatePosition();
    }


    _handlePanResponderEnd(e, gestureState) {
        this._unHighlight();

        // 记录新的最终的坐标值
        this._previousLeft += gestureState.dx;
        this._previousTop += gestureState.dy;
    }

    render() {
        return (
                <View style={{backgroundColor:'#f2f2f2',flex:1}}>
                    <View ref={(c) => {this.circle = c;}} style={styles.circle} {...this._panResponder.panHandlers}>

                    </View>
                </View>


        );
    }
}


var styles = StyleSheet.create({
    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: 40,
        //borderWidth:1,
        backgroundColor: CIRCLE_COLOR,

        //position: 'absolute',
        //left: 0,
        //top: 0,
    },
    container: {
        //flex: 1,
        //paddingTop: 64,
        //paddingLeft:140,
    },
});
