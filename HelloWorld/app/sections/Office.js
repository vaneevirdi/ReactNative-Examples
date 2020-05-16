import React from 'react'
import { Image } from 'react-native'

export class Office extends React.Component {
    render() {
        return (
            <Image source={ require('./img/office.jpg')} />
        );
    }
}