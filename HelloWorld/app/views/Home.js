import React from 'react'
import { View, Text, StyleSheet, Platform} from 'react-native'
import { createStackNavigator, createAppContainer} from 'react-navigation'
import { Header } from '../sections/Header.js'
import { Office } from '../sections/Office.js'
import { Menu } from '../sections/Menu.js'

export class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
    }

    render() {
        const { navigation } = this.props;
        let homeText = Platform.select({
            ios: "iOS Home",
            adroid: "Android Home"
        })
        return(
            <View>
                <Header message = "Press to Login" navigation={this.navigation} />
                <Office/>
                <Text>Hi Welcome this is my first react native project.</Text>
                <Text>You are at the {homeText} page!</Text>
                <Text>Hope you like it.</Text>
                <Menu navigation={navigation}/>
            </View>
        );
    }
}