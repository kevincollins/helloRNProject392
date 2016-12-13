/**
 * 简单的底部 tab 导航  demo
 *
 * Created by kehl on 16/8/22.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import TabNavigator from '../../components/js/TabNavigator';

export default class TabNavigatorEx extends Component {

    constructor(props){
        super(props);
        this.state = {selectedIndex:'first'};
    }

    _renderContent(){
        const { selectedIndex } = this.state;
        let content;

        switch(selectedIndex) {
            case 'first':
                content = <TouchableOpacity><Text>dddd</Text></TouchableOpacity>

                break
            case 'second':
                content = <Text>This is the content 2</Text>
                break
            case 'third':
                content = <Text>This is the content 3</Text>
                break
            case 'fourth':
                content = <Text>This is the content 4</Text>
                break
        }
        return content;
    }


    render() {
        var self = this;
        return (
            <View style={{flex:1}}>

                <View style={styles.container}>
                    {this._renderContent()}
                </View>

                <TabNavigator selected={this.state.selectedIndex} style={{backgroundColor:'white'}}
                      selectedStyle={{color:'red'}} onSelect={el=>this.setState({selectedIndex:el.props.name})}>
                    <Text name="first">First1</Text>
                    <Text name="second" selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'red'}}>Second</Text>
                    <Text name="third" selectedStyle={{color:'green'}}>Third</Text>
                    <Text name="fourth">Fourth</Text>
                </TabNavigator>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

