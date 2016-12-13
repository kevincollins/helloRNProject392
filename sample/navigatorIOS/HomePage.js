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

import TWebView from './TWebView';
import HomePageView2 from './HomePageView2';

export default class HomePage extends Component{

    render(){
        return(
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    component: HomePageView,
                    title: '首页',
                    //barTintColor: '#F5FCDD',
                    navigationBarHidden: false
                }}/>
        );
    }
}

class HomePageView extends Component{

    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            user: null,
        }
    }

    componentWillMount(){

    }

    clear(){
        let x = Math.round(Math.random()+1);
        this.setState({
            id: x,
            user: null,
        });
    }

    goToNext(title){

        let self = this;
        console.log('=================');
        const { navigator } = this.props;

        if(navigator) {
            console.log('1111');
            navigator.push({
                title: title,
                barTintColor: '#F5FCDD',
                component: HomePageView2,
                params: {
                    id: this.state.id,
                    //从 HomePageView2 获取user
                    getUser: function(user) {
                        self.setState({
                            user: user
                        })
                    }
                }
            });
        }
        else{
            console.log('2222 navigator is null.');
        }
    }

    render(){
        return(
            <View style={styles.main}>

                {this.state.user!=null?
                    <View>
                        <Text>用户信息: { JSON.stringify(this.state.user) }</Text>
                    </View> :<View><Text></Text></View>
                }

                <View>
                    <TouchableOpacity onPress={this.goToNext.bind(this,"第二页title")}>
                        <Text>查询ID为{ this.state.id }的用户信息</Text>
                    </TouchableOpacity>

                </View>

                <View style={{marginTop:50}}>
                    <TouchableOpacity onPress={this.clear.bind(this)}>
                        <Text>clear</Text>
                    </TouchableOpacity>

                </View>

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
});
