/**
 * 使用 组件 Navigation
 *
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

import Navigation from '../../components/js/Navigation';

export default class NavigationEx extends Component {

    constructor(props) {
        super(props);

    }

    /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }

    /**
     * 配置场景动画
     * @param route 路由
     * @param routeStack 路由栈
     * @returns {*} 动画
     */
    configureScene(route, routeStack) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
        }
        return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
    }

    render() {
        return (
            <Navigator
                style={{flex: 1}}
                initialRoute={{component: FirstPage}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
            />
        );
    }

}

class FirstPage extends Component {

    constructor(props) {
        super(props);
    }

    onRightPress() {
        alert("done!");
    }

    goToNext() {
        let self = this;

        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                //name: 'SecondPage',
                component: SecondPage,
                passProps: {
                    title: "SecondPage",
                    message:"this is second page",
                    buttonText:"DONE",
                    click:this.onRightPress,
                },
            })
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{marginTop: 40}}>

                    <TouchableHighlight underlayColor="red" onPress={this.goToNext.bind(this)}>
                        <Text>goto </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}


class SecondPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1,marginTop: 0}}>
                <Navigation  {...this.props}/>
                <View style={{marginTop: 0}}>
                    <Text> Hi, {this.props.message}</Text>
                </View>
            </View>
        );
    }
}
