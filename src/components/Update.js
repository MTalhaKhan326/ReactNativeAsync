import React from 'react';
import { updatePriority, updateTask } from "../redux/taskSlice";

import { Text, ViewText,
  View,
  TextInput,
  TouchableOpacity,
  Alert, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RadioButton } from 'react-native-paper';
import RadioButtonRN from 'radio-buttons-react-native';
const storageKeyTasks = 'alltasks'

// import { nanoid } from '@reduxjs/toolkit';
// import { TextInput  } from 'react-native-web';

const Update = ({ route }, { navigation }) => {
  const [task , settask] = useState(route.params.item);
  const [name, changeName] = useState(route.params.item.name);
    

  const [id, prevId] = useState(route.params.item.id)
  const [favourite, prevfavourite] = useState(route.params.item.favourite)
  const [priority, prevpriority] = useState(route.params.item.priority)
  console.log("priority :", priority)
  const [checked, setChecked] = useState(priority);
  console.log("Taskkkkkkkkkk", priority)
  const priorit = useSelector((state) => state.tasks.task);
  console.log("priorit",priorit)
//   const [description, setDescription]= useState(route.params.description)
  const dispatch = useDispatch();

const updateItem = async() => {
   
    try {
        AsyncStorage.setItem(storageKeyTasks, JSON.stringify([priorit]))
        Alert.alert("Data is added in storage")
  
      } catch (e) {
         Alert.alert("error",e)
      }
  }

  const onSubmitTask = async() => {
    if (name.trim().length === 0) {
      Alert.alert("You need to enter a task");
      changeName("");
      return;
    }
    // else if (description.trim().length === 0) {
    //   Alert.alert("You need to enter a description");
    //   setDescription("");
    //   return;
    // }

    dispatch(
      updateTask({
        name: name,
        id: id,
       
        // description: description
      })
    );
    

    updateItem();
  };

   

  const priorityList = [
    {
      label: 'high',
      value: '1'
    },
    {
      label: 'medium',
      value: '2'
    },
    {
      label: 'low',
      value: '3'
    },
  ];
  return (
      
        
      <View>
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
          onChangeText={changeName}
          value={name}
        />
        {/* <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            margin: 10,
            width: "90%",
            borderRadius: 5,
          }}
          placeholder="Add description"
          onChangeText={setDescription}
          value={description}
        /> */}
         <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            margin: 10,
            width: "90%",
            borderRadius: 5,
            alignItems: "center",
          }}
          onPress={onSubmitTask}
        >
          <Text style={{ color: "white" }}>Update</Text>
        </TouchableOpacity>
        {/* <Text>{name}</Text> */}
        {/* <Radiobtn selected={true} /> */}
        {/* <Text>{description}</Text> */}
        {/* <RadioButtonRN
        data={priorityList}
        selectedBtn={(e) => {
          dispatch(updatePriority({
            task: task,
            priority: e.value
          }))
          console.log('selected::: ', e)
          
          }}
        /> */}
 <RadioButton
        value="1"
        data={priorityList}
        status={ checked === '1' ? 'checked' : 'unchecked' }
        onPress={() => {
          dispatch(updatePriority({
            task: task,
            priority: '1'
          }))
          setChecked('1')
        }}
      />
      <RadioButton
        value="2"

        status={ checked === '2' ? 'checked' : 'unchecked' }
        onPress={() => {
          dispatch(updatePriority({
            task: task,
            priority: '2'
          }))
          setChecked('2')
        }}
      />
       <RadioButton
        value="3"

        status={ checked === '3' ? 'checked' : 'unchecked' }
        onPress={() => {
          dispatch(updatePriority({
            task: task,
            priority: '3'
          }))
          setChecked('3')
        }}
      />
      </View>

  )
}

export default Update;




 // const todos = useSelector(() => {
  //   return {
  //     name: route.params.name,
  //     id: route.params.id
  //   }
  // });
  // console.log("Todos", todos)
    // const id = route.id;