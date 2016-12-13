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


import BlurImage from 'react-native-blur-image'

export default class ImageBlurEx extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <BlurImage
                source={{ uri:'https://facebook.github.io/react/img/logo_og.png' }}
                style={{ width: 400, height: 200 }}
                blurRadius={50}
                sampling={1}
            />
        );
    }
}

