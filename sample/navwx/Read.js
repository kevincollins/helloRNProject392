/**
 * Created by kehl on 16/8/29.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import Navigation from '../../components/js/Navigation';

export default class Read extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ReadView/>
        );
    }

}

class ReadView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: 0}}>
                <Navigation index={0} title="Read"/>
                <View style={styles.main}>
                    <Text>read</Text>
                </View>
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
        backgroundColor: '#F0FFF0',
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
