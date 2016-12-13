/**
 *  演示了 Navigator 中的 navigationBar
 */

'use strict'; // 启用严格模式

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Navigator
} from 'react-native';

class FirstPage extends Component {
    // 填出提示框
    onPress() {
        alert("我是Spike!");
    }

    /**
     * 跳转页面至 SecondPage
     * @param name 传递参数
     * @param type 动画类型
     */
    gotoNext(name, type = 'Normal') {
        this.props.navigator.push({
            component: SecondPage,
            name:"SecondPage",
            passProps: {
                name: name
            },
            onPress: this.onPress,
            rightText: 'DONE',
            type: type
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.gotoNext('(来源第一页:右出)')}>
                    <Text style={styles.buttonText}>
                        {'跳转至第二页(右出)'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.gotoNext('(来源第一页:底出)', 'Bottom')}>
                    <Text style={styles.buttonText}>
                        {'跳转至第二页(底部)'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

/**
 * 第二页
 */
class SecondPage extends Component {

    // 填出提示框
    onPress() {
        alert("我是Spike22222!");
    }

    render() {
        return (
            <View style={styles.container}>

                <Text>
                    第二页: {this.props.name}
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.props.navigator.pop()}>
                    <Text style={styles.buttonText}>
                        返回上一页
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }


}


// 主模块
class NavigatorBar extends Component {
    /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }

    configureScene(route, routeStack) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }

    render() {

        // 导航栏的Mapper
        var NavigationBarRouteMapper = {
            // 左键
            LeftButton(route, navigator, index, navState) {
                if (index > 0) {
                    return (
                        <View style={styles.navContainer}>
                            <TouchableOpacity
                                underlayColor='transparent'
                                onPress={() => {if (index > 0) {navigator.pop()}}}>
                                <Text style={styles.leftNavButtonText}>
                                    后退
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                } else {
                    return null;
                }
            },
            // 右键
            RightButton(route, navigator, index, navState) {
                if (route.onPress){
                    return (
                        <View style={styles.navContainer}>
                            <TouchableOpacity
                                onPress={() => route.onPress()}>
                                <Text style={styles.rightNavButtonText}>
                                    {route.rightText || '右键'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                }
                return (
                    <View style={styles.navContainer}>
                        <TouchableOpacity
                            onPress={() => route.onPress()}>
                            <Text style={styles.rightNavButtonText}>
                                {route.rightText || '右键'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
            },
            // 标题
            Title(route, navigator, index, navState) {
                return (
                    <View style={styles.navContainer}>
                        <Text style={styles.title}>
                            {route.name}
                        </Text>
                    </View>
                );
            }
        };


        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{name: 'FirstPage', component: FirstPage}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.navContainer}
                        routeMapper={NavigationBarRouteMapper}/>}
            />
        );
    }
}

var styles = StyleSheet.create({
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


