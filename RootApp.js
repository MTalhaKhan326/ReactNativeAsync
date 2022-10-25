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
import All from './src/components/All';
// import  Favorite  from './src/redux/taskSlice';
// import Data from './src/components/Data';
import Favourite from './src/components/Favourite';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
     <Tab.Navigator>
      <Tab.Screen name="TodoHeader" component={TodoHeader} />
      <Tab.Screen name="TodoList" component={TodoList} />
      <Tab.Screen name="Favourite" component={Favourite} />
      {/* <Tab.Screen name="Searchdata" component={Searchdata} /> */}
      {/* <Tab.Screen name="HighCategory" component={HighCategory} />
      <Tab.Screen name="LowCategory" component={LowCategory} />
      <Tab.Screen name="MediumCategory" component={MediumCategory} />  */}
    </Tab.Navigator>
  )
}
    
export default function Terastack(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="TodoHeader" component={TodoHeader} />
      <Stack.Screen name="TodoList" component={TodoList} />
      <Stack.Screen name="Update" component={Update} />
      <Stack.Screen name="Searchdata" component={Searchdata} />
      <Stack.Screen name="HighCategory" component={HighCategory} />
      <Stack.Screen name="LowCategory" component={LowCategory} />
        <Stack.Screen name="MediumCategory" component={MediumCategory} /> 
         <Stack.Screen name="All" component={All} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

