import React from 'react';
import {View, StatusBar} from 'react-native';
import { WebView } from 'react-native-webview';

const Google = () => {
    return(
            <WebView source={{ uri: 'https://google.com/' }} />
    );
};

export default Google;