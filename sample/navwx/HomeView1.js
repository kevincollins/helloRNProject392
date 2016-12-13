/**
 * Created by kehl on 16/9/29.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import Navigation from '../../components/js/Navigation';

import HomeView2 from './HomeView2';


export default class HomeView1 extends Component{

    constructor(props) {
        super(props);
    }

    onPressRight(){
        alert("I'm a function from Page1 .");
    }

    gotoNext(message) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                //name: 'SecondPage',
                component: HomeView2,
                passProps: {
                    title: "SecondPage",
                    message:message,
                    buttonText:"DONE",
                    click:this.onPressRight,
                },
            })
        }
    }

    render() {
        return (
            <View style={{flex: 1,marginTop: 0}}>
                <Navigation index={0} title="Home"/>
                <View style={styles.main}>
                    <Text>homepage</Text>
                    <TouchableOpacity onPress={()=>this.gotoNext('(来源第一页:右出)')}>
                        <Text>click</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({

    container1: {
        flex: 1
    },

    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    // 页面框架
    container: {
        flex: 4,
        marginTop: 100,
        flexDirection: 'column'
    },
    // 导航栏
    navContainer: {
        backgroundColor: '#81c04d',
        paddingTop: 12,
        paddingBottom: 10,
    },
    // 导航栏文字
    headText: {
        color: '#ffffff',
        fontSize: 22
    },
    // 按钮
    button: {
        height: 60,
        marginTop: 10,
        justifyContent: 'center', // 内容居中显示
        backgroundColor: '#ff1049',
        alignItems: 'center'
    },
    // 按钮文字
    buttonText: {
        fontSize: 18,
        color: '#ffffff'
    },
    // 左面导航按钮
    leftNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginLeft: 13
    },
    // 右面导航按钮
    rightNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginRight: 13
    },
    // 标题
    title: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        flex: 1                //Step 3
    }
});
