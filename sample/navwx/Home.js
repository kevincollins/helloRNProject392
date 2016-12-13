/**
 * Created by kehl on 16/8/22.
 */


import React, { Component,PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Navigator
} from 'react-native';

import TabBar from '../../components/js/TabBar';

import HomeView1 from './HomeView1';
import Read from './Read';
import Setting from './Setting';

export default class Home extends Component {

    static propTypes = {
        selectedIndex: PropTypes.string,  //
    };

    static defaultProps = {
        selectedIndex: "first",
    };

    constructor(props){
        super(props);

        const {selectedIndex} = this.props;
        this.state = {selectedIndex:selectedIndex};
    }

    _renderView(){

        const { selectedIndex } = this.state;
        console.log(" selectedIndex= "+selectedIndex);
        let content;

        switch(selectedIndex) {
            case 'first':
                content = <HomeView1 {...this.props}/>
                break
            case 'second':
                content = <Read {...this.props}/>
                break
            case 'third':
                content = <Setting {...this.props}/>
                break
        }
        return content;
    }

    _onSelect(e){
        console.log("ee=",e);
        this.setState({selectedIndex:e.props.name});
    }

    render() {
        var self = this;
        return (
            <View style={{flex:1}}>
                {this._renderView()}

                <TabBar selected={this.state.selectedIndex} style={{backgroundColor:'white'}}
                        selectedStyle={{color:'red'}} onSelect={(e)=>{this._onSelect(e)}}>
                    <Text name="first">Home</Text>
                    <Text name="second">Read</Text>
                    <Text name="third">Setting</Text>

                </TabBar>
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
