/**
 * Created by 58 on 2016/7/1.
 *
 * https://github.com/marcshilling/react-native-image-picker
 *
 * 调用 自定义NativeModules 来实现 图片、视频选择控件
 * 
 */

'use strict'

import React from 'react';

import {
    Text,
    View,
    NativeModules,
} from 'react-native';

//const { NativeModules } = require('react-native');
const { ImagePickerManager } = NativeModules;

const DEFAULT_OPTIONS = {
    title: 'Select a Photo',
    cancelButtonTitle: 'Cancel',
    takePhotoButtonTitle: 'Take Photo…',
    chooseFromLibraryButtonTitle: 'Choose from Library…',
    quality: 1.0,
    allowsEditing: false
};

module.exports = {
    ...ImagePickerManager,
    showImagePicker: function showImagePicker(options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        return ImagePickerManager.showImagePicker({...DEFAULT_OPTIONS, ...options}, callback)
    }
}
