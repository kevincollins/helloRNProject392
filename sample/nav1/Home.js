/**
 * Created by kehl on 16/8/29.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Navigator,
} from 'react-native';

import HomeView2 from './HomeView2';

export default class Home extends Component{

    constructor(props){
        super(props);
    }

    /**
     * 使用动态页面加载
     *
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
        //let Component = route.component;
        //return <Component {...route.params} navigator={navigator}/>
        return <route.component navigator={navigator}  {...route.passProps} />;
    }

    /**
     * 静态加载页面
     *
     * @param route
     * @param navigator
     * @returns {XML}
     * @private
     */
    _renderScene(route, navigator) {
        return <HomeView/>
    }

    configureScene(route, routeStack) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom;
        }
        return Navigator.SceneConfigs.FadeAndroid;
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
                initialRoute={{name: 'FirstPage', component: HomeView}}
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

class HomeView extends Component {

    constructor(props) {
        super(props);
    }
    onPressRight(){
        alert("我是Spike!");
    }

    gotoNext(message, type = 'Normal') {
        this.props.navigator.push({
            component: HomeView2,
            name:"SecondPage",
            passProps: {
                message: message
            },
            onPress: this.onPressRight,
            rightText: 'DONE1',
            type: type
        })
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>homepage</Text>
                <TouchableOpacity onPress={()=>this.gotoNext('(来源第一页:右出)')}>
                    <Text>click</Text>
                </TouchableOpacity>
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
