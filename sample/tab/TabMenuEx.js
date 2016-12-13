
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import MenuList from '../../components/js/TabMenu';

var result = {
    "code": 0,
    "codeMsg": "成功",
    "data": [
        {
            "id": 50,
            "level": 3,
            "name": "生活兴趣",
            "serviceList": [
                {
                    "id": 401,
                    "level": 4,
                    "name": "烘焙1"
                },
                {
                    "id": 404,
                    "level": 4,
                    "name": "烘焙2"
                }, {
                    "id": 405,
                    "level": 4,
                    "name": "烘焙3"
                }, {
                    "id": 406,
                    "level": 4,
                    "name": "烘焙4"
                }, {
                    "id": 407,
                    "level": 4,
                    "name": "烘焙55"
                }
            ]
        },
        {
            "id": 51,
            "level": 3,
            "name": "健身运动",
            "serviceList": [
                {
                    "id": 395,
                    "level": 4,
                    "name": "健身"
                },
                {
                    "id": 392,
                    "level": 4,
                    "name": "游泳"
                }
            ]
        },
        {
            "id": 70,
            "level": 3,
            "name": "其他",
            "serviceList": [
                {
                    "id": 412,
                    "level": 4,
                    "name": "其他"
                }
            ]
        }
    ]
};

export default class TabMenuEx extends Component {

    constructor(props) {
        super(props);

    }

    _onPress(name,id) {
        alert("name="+name + ",id="+id);
    }

    render() {
        return (
            <View style={{marginTop: 25}}>
                <MenuList data={result.data} nSelected={0} rightClick={this._onPress.bind(this)} >
                </MenuList>
            </View>
        );
    }
}

