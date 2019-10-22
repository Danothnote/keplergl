import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

class KeplerGL extends Component {
  render() {
    return (
        <WebView source={{ uri: "file:///android_asset/test.html" }} />
    );
  }
}

export default KeplerGL