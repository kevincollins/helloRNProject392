/**
 * Created by kehl on 16/8/22.
 *
 * index 入口
 *
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import TabBar from '../../components/js/TabBar';

import Home from './Home';
import Read from './Read';
import Setting from './Setting';

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {selectedIndex:'first'};
    }

    _renderView(){
        const { selectedIndex } = this.state;

        console.log(" selectedIndex= "+selectedIndex);
        let content;

        switch(selectedIndex) {
            case 'first':
                content = <Home/>
                break
            case 'second':
                content = <Read/>
                break
            case 'third':
                content = <Setting/>
                break
        }
        return content;
    }

    render() {
        var self = this;
        return (
            <View style={{flex:1}}>
                {this._renderView()}

                <TabBar selected={this.state.selectedIndex} style={{backgroundColor:'white'}}
                      selectedStyle={{color:'red'}} onSelect={el=>this.setState({selectedIndex:el.props.name})}>
                    <Text name="first">Home</Text>
                    <Text name="second">Read</Text>
                    <Text name="third">Setting</Text>
                </TabBar>

            </View>
        );
    }
}

