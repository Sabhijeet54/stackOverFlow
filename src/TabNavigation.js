import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QuestionsScreen from './QuestionsScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabel: '',
                tabBarIcon: ({ focused, color, size }) => {
                    let imageSource;

                    if (route.name === 'React') {
                        imageSource = focused
                            ? 'blue'
                            : 'grey'
                    } else if (route.name === 'React Native') {
                        imageSource = focused
                            ? 'blue'
                            : 'grey'
                    } else if (route.name === 'Node') {
                        imageSource = focused
                            ? 'blue'
                            : 'grey'
                    }

                    return <Text style={{ color: color }}  >{route.name}</Text>;;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
            }}>
            <Tab.Screen name="React" component={QuestionsScreen} initialParams={{ tag: 'react' }} />
            <Tab.Screen name="React Native" component={QuestionsScreen} initialParams={{ tag: 'react-native' }} />
            <Tab.Screen name="Node" component={QuestionsScreen} initialParams={{ tag: 'node.js' }} />
        </Tab.Navigator>
    );
};

export default TabNavigation;
