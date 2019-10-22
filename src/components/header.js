import React from 'react'
import {
    StyleSheet,
    StatusBar,
    View,
    Image
} from 'react-native'

const Header = props => (
    <View style={styles.container}>
        <StatusBar backgroundColor="#ffab40" barStyle="light-content" />
        <Image style={styles.logo} source={require('../images/logo.png')}/>
    </View>
)

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 30,
        width: 150,
    }
})

export default Header