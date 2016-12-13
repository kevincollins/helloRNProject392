
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import MenuList from '../../components/js/TabMenu3';


var data = {
    "Language": {
        "All": ["All"],
        "Web Front": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "Server": [
            "Node.js",
            "PHP",
            "Python",
            "Ruby"
        ]
    },
    "Tool":{
        "All": ["All"],
        "Apple": ["Xcode"],
        "Other": ["Sublime Text", "WebStrom",]
    }
};

export default class TabMenu3Ex extends Component {

    constructor(props){
        super(props);

    }

    onPress(val){
        alert(val);
    }

    render() {
        return (
            <View style={{marginTop:25}}>
                <MenuList data={data} nSelected={1} tabSelected={0} click={this.onPress.bind(this)}/>
            </View>
        );
    }
}

