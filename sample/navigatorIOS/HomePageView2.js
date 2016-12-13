/**
 * Created by kehl on 16/8/26.
 */

import React, { Component } from 'react';
import {
    NavigatorIOS,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

const USER_MODELS = {
    1: { name: 'mot', age: 23 },
    2: { name: '晴明大大', age: 25 }
};

export default class HomePageView2 extends React.Component {

    myparams;

    constructor(props) {
        super(props);
        this.myparams = this.props.route.params;
        this.state = {
            id: null
        }
    }
    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id
        this.setState({
            id: this.myparams.id
        });
    }
    _pressButton() {
        const { navigator } = this.props;
        if(this.myparams.getUser) {
            let user = USER_MODELS[this.state.id];
            this.myparams.getUser(user);
        }
        if(navigator) {
            navigator.pop();
        }
    }
    render() {
        return(
            <View style={styles.main}>
                <Text>获得的参数: id={this.state.id}</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳回去</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },

    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
});