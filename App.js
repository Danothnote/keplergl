import React, {Component} from 'react'
import {
    StyleSheet,
    View
} from 'react-native'

import Header from './src/components/header'
import KeplerGL from './src/components/keplergl'

class App extends Component {
    render() {
        return (
            <View style={[{flex:1}, styles.container]}>
                <Header />
                <KeplerGL />
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#ffab40'
    }
})

export default App