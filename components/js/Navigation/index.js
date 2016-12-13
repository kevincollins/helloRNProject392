'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    back() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {

        const {index,title,click,buttonText} = this.props;

        return (
            <View style={styles.container}>

                {index==0? <View/>:(
                    <TouchableWithoutFeedback onPress={this.back.bind(this)}>
                        <Image source={require('../../images/nav_back.png')} style={styles.image}></Image>
                    </TouchableWithoutFeedback>)
                }


                <Text style={styles.title}>{this.props.title}</Text>

                <TouchableWithoutFeedback onPress={this.props.click}>
                    <View><Text style={styles.button}>{this.props.buttonText}</Text></View>
                </TouchableWithoutFeedback>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#e6454a',
        height: 64,
        paddingTop: 20,
        alignItems: 'center',
    },
    image: {
        marginLeft: 20,
        width: 30 / 2,
        height: 30 / 2,
    },
    title: {
        fontSize: 34 / 2,
        color: '#ffffff',
    },
    button: {
        marginRight: 20,
        color: 'white'
    }
});
