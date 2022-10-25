import React from 'react'
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
     <Tab.Navigator>
      <Tab.Screen name="Home" component={TodoList} />
      <Tab.Screen name="Settings" component={TodoHeader} />
    </Tab.Navigator>
  )
}

export default BottomNavigator