/**
 *  使用:

   <MenuButton renderIcon={require('./images/home_icons/wdgz.png')}  showText={'我的关注'} tag={'wdgz'}  onClick={this._onMenuClick}/>

 */
'use strict';

import React, { Component,PropTypes } from 'react';

import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

export default class MenuButton extends Component {

    static propTypes = {
        renderIcon: PropTypes.number.isRequired,  // 图片,加入.isRequired即为必填项
        showText: PropTypes.string,  // 显示标题\文字
        tag: PropTypes.string,  // Tag
        onClick: PropTypes.func  // 回调函数
    };

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
    }

    _onClick() {
        if (this.props.onClick) {   // 在设置了回调函数的情况下
            this.props.onClick(this.props.showText, this.props.tag);  // 回调Title和Tag
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick}>
                <View style={{alignItems:'center',flex:1}}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text style={styles.showText}>{this.props.showText}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 38,
        height: 38,
        marginBottom: 2
    },
    showText: {
        fontSize: 12
    }
});
