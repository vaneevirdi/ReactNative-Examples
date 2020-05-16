import React from 'react';
import { Home } from './app/views/Home.js'
import { Contact } from './app/views/Contact.js'
import { createAppContainer, createStackNavigator} from 'react-navigation'

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Contact: Contact,
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}