import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import React, { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigator from "./BottomNavigator";
import TodoList from "./TodoList";

import { addTask ,updateTasks } from "../redux/taskSlice";

const TodoHeader = ({navigation}) => {
  const [todo, setTodo] = useState("");
  const [datastorage, setDatastorage] = useState([]);
   const todos = useSelector((state) => state.tasks.task);
  const storageKeyTasks = 'alltasks'

 useEffect(() => {
     
     async function tempfunction() {
    await getItemlist()
   }
   tempfunction()
    return () => {}
  },[])

  const dispatch = useDispatch();
  
 const getItemlist = async () => {
    try {
      const data = await AsyncStorage.getItem(storageKeyTasks);
      console.log('*********')
      console.log("dart..........................",data)
      if (typeof data === 'string') {
        const output = JSON.parse(data);
        setDatastorage(output)
        dispatch(updateTasks(output.slice(0, 12)))
        console.log("outputt", output)

      }
      
    } catch (error) {
      console.log(error)
    }
   
  }
  const onSubmitTask = () => {
    
    if (todo.trim().length === 0) {
      Alert.alert("You need to enter a task");
      setTodo("");
      return;
    }
   
     const task = {
      id: nanoid(),
      name: todo,
      priority: "1",
       isFavorite: false,
     }
    
    console.log("todos", todos)
    const newdata = JSON.stringify([...datastorage, ...todos])
      try {
        AsyncStorage.setItem(storageKeyTasks, JSON.stringify([...datastorage, ...todos]))
        
        Alert.alert("Data is added in storage")
  
      } catch (e) {
        console.log(e)
      }
    
    
    dispatch(
      addTask(
        task
      )
    );
    setTodo("");
    // setItem();
    navigation.navigate('TodoList');
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Todo List
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* TextInput */}
        <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            margin: 10,
            width: "90%",
            borderRadius: 5,
          }}
          placeholder="Add todo"
          onChangeText={setTodo}
          value={todo}
        />
        {/* Button */}
        <TouchableOpacity
        style={{
            backgroundColor: "blue",
            padding: 20,
            margin: 15,
            width: "90%",
            borderRadius: 5,
            alignItems: "center",
          }}
          onPress={onSubmitTask}
        >
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
        <ScrollView>
         <Text>Array List</Text>
        {
          datastorage.map((item , index) => {
            return (
              // console.log("item",item)
              <Text key={index}>
                {item.name}
                {item.priority}
              </Text>
            )
          })
          }
          {/* <BottomNavigator/> */}
        </ScrollView>
          
      </View>
    
    </View>
    
  );
};

export default TodoHeader;

const styles = StyleSheet.create({});
