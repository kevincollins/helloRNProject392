/**
 * Created by kehl on 16/11/5.
 */

'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Animated,
    Easing,
    Dimensions,
    Text,
} from 'react-native';


export default class AnimatedDemo1 extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            myHeight:new Animated.Value(0),
        };
    }

    componentWillMount() {


    }

    componentDidMount() {
        this.rotate();
    }

    rotate() {
        this.state.myHeight.setValue(0);
        Animated.timing(
            this.state.myHeight,
            {
                toValue: 40,
                duration: 1000,
                easing: Easing.linear,
                //delay:1000
            }
        ).start(()=>this.rotate());
    }


    render(){
        return(
            <View style={{backgroundColor:'green',}}>
                <Animated.View style={{height:this.state.myHeight}} >

                </Animated.View>

            </View>
        );
    }
}
