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
import { Ionicons } from "@expo/vector-icons";
import All from './src/components/All';
// import  Favorite  from './src/redux/taskSlice';
// import Data from './src/components/Data';
import Favourite from './src/components/Favourite';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native-web';
// import { green100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
    
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20 ,
        elevation: 0,
        borderRadius: 15,
        height: 90
       }
     }}  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'TodoHeader') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'create'
                      : 'create'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'TodoList') { //settings ko menu krna hai
              return (
                <Ionicons
                  name={focused ? 'list' : 'list'}
                  size={size}
                  color={color}
                />
              );
            }else if (route.name === 'Favourite') { //settings ko menu krna hai
              return (
                <Ionicons
                  name={focused ? 'star' : 'star'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'white',
          tabBarInactiveBackgroundColor:'#fff',
          tabBarHideOnKeyboard:'true',
          tabBarActiveBackgroundColor:'blue'
          // tabBarActiveBackgroundColor:'#ff8989'
        })}>
      <Tab.Screen name="TodoHeader" component={TodoHeader}   />
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

