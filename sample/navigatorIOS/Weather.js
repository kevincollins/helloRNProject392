/**
 * Created by kehl on 16/8/26.
 */



import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';



export default class Weather extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>weather</Text>
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