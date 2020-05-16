import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Alert, Platform} from 'react-native'

export class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    onPress = ()=>{
        Alert.alert("Button is tapped!")
    }

    render() {
        const { navigation } = this.props;
        return(
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.onPress}>
                    <Text style={styles.buttonText}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {navigation.navigate('Contact')}}>
                    <Text style={styles.buttonText}>Contact</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: Platform.OS === "android" ? '#35605a' : '#30905a',
    },
    buttonStyle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '50%'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '400'
    }
});