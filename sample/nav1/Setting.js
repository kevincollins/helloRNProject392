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
} from 'react-native';

export default class Setting extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <SettingView/>
        );
    }

}

class SettingView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>setting</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCDD',
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
