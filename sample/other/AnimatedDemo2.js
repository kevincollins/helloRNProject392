
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Animated,
    LayoutAnimation,
    Text,
    Easing,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';

export default class AnimatedDemo2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),

            rotation: new Animated.Value(0),
        };
    }
    render() {
        return (
            <Animated.Image                         // 可选的基本组件类型: Image, Text, View
                source={{uri: 'http://p1.ifengimg.com/a/2016_45/5ab33184ae818e6_size17_w604_h379.jpg'}}
                style={{
                    //flex: 1,
                    width:100,
                    height:200,
                    /**transform: [                        // `transform`是一个有序数组（动画按顺序执行）
                        {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
                    ]*/

                    transform: [{
                        rotateZ: this.state.rotation.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg']
                        })
                    },]


                }}
            />
        );
    }
    componentDidMount() {
        /*this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
        Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
            this.state.bounceValue,                 // 将`bounceValue`值动画化
            {
                toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
                friction: 1,                          // Bouncier spring
            }
        ).start();     */                           // 开始执行动画


        this.rotate();
    }

    rotate() {
        this.state.rotation.setValue(0);
        Animated.timing(
            this.state.rotation,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                //delay:1000
            }
        ).start(()=>this.rotate());
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    box: {
        backgroundColor: 'red',
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


