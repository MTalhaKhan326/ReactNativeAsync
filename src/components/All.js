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
import { addnewTask, updateTasks } from "../redux/taskSlice";
//import useSelector from "react-redux";lea
import { useSelector} from "react-redux";
import { deleteTask , Favorite , filteredUsers} from "../redux/taskSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// import LowCategory from "./LowCategory";
import HighCategory from "./HighCategory";
import LowCategory from "./LowCategory";
import MediumCategory from "./MediumCategory";
import AsyncStorage from '@react-native-async-storage/async-storage';

const All = ({ navigation }) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
  const [query, setquery] = useState("")
  const [datastorage, setDatastorage] = useState([]);
  const storageKeyTasks = 'alltasks'
  const todos = useSelector((state) => state.tasks.task);
  const [currentItems, setCurrentItems] = useState(todos ?? [])
  
  // const [highItems, setHighItems] = useState(todos ?? [])
  // const [mediumItems, setMediumItems] = useState(todos ?? [])
  //  const [lowItems, setLowItems] = useState(todos ?? [])
  // console.log("tododos", todos);
  
  
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
  useEffect(() => {
    // await AsyncStorage.removeitem()
//     async function removeItemValue() {
//     try {
//       await AsyncStorage.removeItem(storageKeyTasks);
//       console.log("doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
//         return true;
//     }
//     catch(exception) {
//         return false;
//     }
// }
    async function tempfunction() {
      await getItemlist()
      // removeItemValue()
    }

   tempfunction()
    return () => {}
  },[])

  // const dispatch = useDispatch();
  
 const getItemlist = async () => {
    try {
      const data = await AsyncStorage.getItem(storageKeyTasks);
      console.log('*********')
      console.log("Arraylength",todos.length)
       console.log("data=",data)
      if (typeof data === 'string') {
        const output = JSON.parse(data);
        
        // setDatastorage(output)
        console.log("outputdata", output)
        console.log("outputt", output.length)
        // if (Array.isArray(output)) {
          dispatch(updateTasks(output.slice(0, 12)))
        // }
        // for (let i = 0; i < output.length; i++) {
        //   const task = {
        //     id: output[i].id,
        //     name: output[i].name,
        //   }
        //   dispatch(
        //     addnewTask(
        //       task
        //     )
        //   );
       
        // }
      }
      
    } catch (error) {
      console.log(error)
    }
  }

   const addnewdata = () => {

    
  }
  console.log("todos", todos)
  AsyncStorage.setItem(storageKeyTasks, JSON.stringify([...todos]))
  // console.log("dataStorage :", datastorage.le)
  // const data = [...datastorage, ...todos]
  // console.log("data", data.length)
  // console.log("item", currentItems)
  
//   const Highpriority = () => {
//      console.log("currentItems =",currentItems)
      
//      setCurrentItems(currentItems.filter(item => item.priority == 1))
//     console.log("item", currentItems)

//  }
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
       
      <View style={styles.item}>
       
          <Text style={styles.title}>{item.name != null ? item.name : ''}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() =>  dispatch(
      deleteTask({
        id: item.id,
      })
          )}
        >
          <Ionicons name="trash" size={30} color="red" />
        </TouchableOpacity>
  {/* <Text style={styles.title}>{item.priority}</Text> */}
        <TouchableOpacity
          style={styles.deleteButton}
            onPress={() => navigation.navigate('Update', {
            item:item,
      // id:item.id,
      // name: item.name,
      // description:item.description
      
    })}
        >
          <Ionicons name="create" size={30} color="red" />
            </TouchableOpacity>

         <TouchableOpacity
          style={styles.deleteButton}
              onPress={() => {
                // favourite(item.id, item.name)
                dispatch(Favorite({ task: item }))
          }}>
          
          <Ionicons name="star" size={30} color={item.isFavorite ? "red" : "blue"} />
          </TouchableOpacity>

          
        </View>
         
        </ScrollView>
    );
  };

  return (
  <View>
      {/* <Filter/> */}
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
        onChangeText={(v) => {
          console.log('******************')
          // console.log("currentItems =",currentItems)
          if (v != null && v.toString().trim().length != 0) {
            setCurrentItems(currentItems.filter(item => item.name.toLowerCase().includes(v.toLowerCase())))
          } else {
            setCurrentItems(todos)
          }
          setTodo(v)
          console.log('******************', currentItems)
          }}
        // onChange={(e)=>setquery()}
          // value={todo}
        />
        {/* Button */}
       
    
        
      <FlatList
        data={currentItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />

  
    </View>
  );
};

export default All;

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
