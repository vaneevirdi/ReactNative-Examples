import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native'

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    toggleUser = ()=>{
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn };
        });
    }

    render() {
        let display = this.state.isLoggedIn ? "Sample User" : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image 
                    style={styles.logoStyle}
                    source={ require('./img/logo.png')}></Image>
                <Text 
                    style={styles.headerText} 
                    onPress={this.toggleUser}>{display}
                </Text>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 2
    },
    headStyle: {
        height: Platform.select( {
            ios: 100,
            android: 60
    
        }),
        paddingTop: 60,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: Platform.OS === "android" ? '#35605a' : '#30905a',
        flexDirection: 'row'
    },
    logoStyle: {
        flex: 1,
        height: undefined,
        width: undefined
    }
});