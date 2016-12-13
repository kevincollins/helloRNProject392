
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';


export default class NavBarScrollableEx extends Component {

    render() {
        return (
            <ScrollableTabView
                style={{marginTop: 20,}}
                initialPage={1}
                renderTabBar={() => <DefaultTabBar />}
            >
                <ScrollView tabLabel="未完成" style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>111111111111111111</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel="已完成" style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>2222222222222222</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel="待评价" style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>333333333333333</Text>
                    </View>
                </ScrollView>
            </ScrollableTabView>

        );

    }


}

const styles = StyleSheet.create({
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});


