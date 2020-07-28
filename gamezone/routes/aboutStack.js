import { createStackNavigator} from 'react-navigation-stack';
import About from '../screens/about';
import React from 'react';
import Header from '../shared/header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='About GameZone' navigation={navigation} />
            }
        },
    },
}


const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ddd', height: 60}
    }
});

export default AboutStack;
