import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useRef, useState } from "react";
// import { Radiobtn } from "./Radiobtn";
import Searchdata from "./Searchdata";
//Ionicons
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Filter from "./Filter";
// import Update from "./Update";
import { Ionicons } from "@expo/vector-icons";
//import useSelector from "react-redux";lea
import { useSelector} from "react-redux";
import { deleteTask , Favorite , filteredUsers} from "../redux/taskSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// import LowCategory from "./LowCategory";
import HighCategory from "./HighCategory";
import LowCategory from "./LowCategory";
import MediumCategory from "./MediumCategory";
import All from "./All";

const TodoList = ({ navigation }) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
  const [query, setquery] = useState("")
  const todos = useSelector((state) => state.tasks.task);
  const [currentItems, setCurrentItems] = useState(todos ?? [])
  // const [highItems, setHighItems] = useState(todos ?? [])
  // const [mediumItems, setMediumItems] = useState(todos ?? [])
  //  const [lowItems, setLowItems] = useState(todos ?? [])
  console.log('todosData',todos);
  console.log("query", query)
   useEffect(() => {
todos
  },[])
  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert("You need to enter a task");
      setTodo("");
      return;
    }
   
     const task = {
      name: todo,
     }
    
    
    dispatch(
      filteredUsers(
        task
      )
    );
    // setTodo("");
    // setItem();
     navigation.navigate('Searchdata');
  };
  const Highpriority = () => {
     console.log("currentItems =",currentItems)
      
     setCurrentItems(currentItems.filter(item => item.priority == 1))
    console.log("item", currentItems)

 }
  // const data = [
  //   {
  //     id: 1,
  //     title: "Learn React Native",
  //   },
  //   {
  //     id: 2,
  //     title: "Learn Redux Toolkit",
  //   },
  // ];

  //delete item by checking if id is equal to the id of the item
  const onDelete = (id) => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  //renderItem function with a delete button
  const renderItem = ({ item }) => {
     const priorityList = [
    {
      label: 'high',
      value: 1
    },
    {
      label: 'medium',
      value: 2
    },
    {
      label: 'low',
      value: 3
    },
  ];
    return (
      <ScrollView>
       
     
        </ScrollView>
    );
  };

  return (
    <ScrollView>
     
        {/* Button */}
       
      <ScrollView>
        
      <FlatList
        data={currentItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />

      </ScrollView>
       <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            margin: 10,
            width: "90%",
            borderRadius: 5,
            alignItems: "center",
          }}
          onPress={ ()=>{navigation.navigate('All')}}
        >
          <Text style={{ color: "white" }}>All</Text>
      </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            margin: 10,
            width: "90%",
            borderRadius: 5,
            alignItems: "center",
          }}
          onPress={ ()=>{navigation.navigate('HighCategory')}}
        >
          <Text style={{ color: "white" }}>High</Text>
      </TouchableOpacity>
      
       <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            margin: 10,
            width: "90%",
            borderRadius: 5,
            alignItems: "center",
          }}
          onPress={ ()=>{navigation.navigate('MediumCategory')}}
        >
          <Text style={{ color: "white" }}>Medium</Text>
      </TouchableOpacity>
       <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            margin: 10,
            width: "90%",
            borderRadius: 5,
            alignItems: "center",
          }}
          onPress={ ()=>{navigation.navigate('LowCategory')}}
        >
          <Text style={{ color: "white" }}>Low</Text>
      </TouchableOpacity>
    </ScrollView>
    
  );
};

export default TodoList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#e9e9e9",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  delete: {
    fontSize: 24,
    color: "red",
  },
});


