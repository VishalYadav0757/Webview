import React from 'react';
import {View, StatusBar} from 'react-native';
import { WebView } from 'react-native-webview';

const Yahoo= () => {
    return(
            <WebView source={{ uri: 'https://in.yahoo.com/' }} />
    );
};

export default Yahoo;