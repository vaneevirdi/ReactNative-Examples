import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native'
import { createStackNavigator, createAppContainer} from 'react-navigation'
import { Header } from '../sections/Header.js'

export class Contact extends React.Component {

    static navigationOptions = {
        title: 'Contact',
    }

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            emailID: "",
            comment:""
        }
    }

    sendComment = ()=>{
        this.clearInput()
        Alert.alert("Thankyou! \nWe have received your input")
    };

    clearInput = ()=> {
        this.setState({
            name: "",
            emailI: "",
            comment: ""
        })
    };

    render() {
        let namePlaceHolder = "Enter your name"
        let emailPlaceHolder = "Enter your email id"
        let commentPlaceHolder = "Enter comments"
        return(
            <View>
                <Header message = "Contact" />
                <Text>Hi Welcome this is my first react native project.</Text>
                <Text>You are at the Contact Us page!</Text>
                <Text>Please leave a comment.</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputFieldStyle}
                        placeholder={namePlaceHolder}
                        onChangeText={(text) => this.setState({name: text})}
                        value={this.name}>
                    </TextInput>

                    <TextInput 
                        style={styles.inputFieldStyle}
                        placeholder={emailPlaceHolder}
                        onChangeText={(text) => this.setState({emailID: text})}
                        value={this.emailID}>
                    </TextInput>

                    <TextInput 
                        style={styles.commentFieldStyle}
                        placeholder={commentPlaceHolder}
                        onChangeText={(text) => this.setState({comment: text})}
                        value={this.comment}
                        multiline = {4}>     
                    </TextInput>

                    <Button title="Send"
                        style={styles.buttonStyle}
                        onPress={this.sendComment}>
                    </Button>
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 40,
        paddingLeft: 24,
        paddingRight: 24,
    },
    inputFieldStyle: {
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
    },
    commentFieldStyle: {
        height: 80,
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonStyle: {
    }
})