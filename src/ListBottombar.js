import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoHeader from "./src/components/TodoHeader";
import TodoList from "./src/components/TodoList";
import Update from './src/components/Update';
import Searchdata from './src/components/Searchdata';
import HighCategory from './src/components/HighCategory';
import LowCategory from './src/components/LowCategory';
import MediumCategory from './src/components/MediumCategory';
// import  Favorite  from './src/redux/taskSlice';
// import Data from './src/components/Data';
import Favourite from './src/components/Favourite';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function BottomNavigator(){
  return (
     <Tab.Navigator> 
      <Tab.Screen name="HighCategory" component={HighCategory} />
      <Tab.Screen name="LowCategory" component={LowCategory} />
      <Tab.Screen name="MediumCategory" component={MediumCategory} /> 
    </Tab.Navigator>
  )
}
 

