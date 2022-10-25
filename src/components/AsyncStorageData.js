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
import { Radiobtn } from "./Radiobtn";
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
const TodoList = ({ navigation }) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
    const [query, setquery] = useState("")
    const [datastorage, setDatastorage] = useState([]);
    const storageKeyTasks = 'alltasks'

    useEffect(() => {
     
     async function tempfunction() {
    await getItemlist()
   }
   tempfunction()
    return () => {}
    }, [])
    
    const getItemlist = async () => {
    try {
      const data = await AsyncStorage.getItem(storageKeyTasks);
      console.log('*********')
      console.log(data)
      if (typeof data === 'string') {
        const output = JSON.parse(data);
        setDatastorage(output)
        console.log("outputt", output)

      }
      
    } catch (error) {
      console.log(error)
    }
    }
    
    const todos = useSelector((state) => state.tasks.task);
    const newData = [...datastorage, todos]
    console.log("Dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",newData)
  const [currentItems, setCurrentItems] = useState(todos ?? [])
  console.log(todos);
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
    return (
      <ScrollView>
       
      <View style={styles.item}>
       
        <Text style={styles.title}>{item.name}</Text>
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

          <TouchableOpacity
          style={styles.deleteButton}
              onPress={() => {
                // favourite(item.id, item.name)
                navigation.navigate('HighCategory')
                // dispatch(CategoryHigh({ task: item }))
                // dispatch(filteredHighCategory({task: item}))
          }}>
          
          <Ionicons name="pause" size={30} color={item.isHigh ? "red" : "blue"} />
          </TouchableOpacity>

          
          <TouchableOpacity
          style={styles.deleteButton}
              onPress={() => {
                // favourite(item.id, item.name)
                navigation.navigate('MediumCategory')
                // dispatch(CategoryMedium({ task: item }))
          }}>
          
          <Ionicons name="trash" size={30} color={item.isMedium ? "red" : "blue"} />
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.deleteButton}
              onPress={() => {
                // favourite(item.id, item.name)
                navigation.navigate('LowCategory')
                // dispatch(CategoryLow({ task: item }))
          }}>
          
          <Ionicons name="pause" size={30} color={item.isLow ? "red" : "blue"} />
          </TouchableOpacity>
          
          <Text>hello</Text>
        </View>
        </ScrollView>
    );
  };

  return (
    <ScrollView>
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
          console.log("currentItems =",currentItems)
          if (v != null && v.toString().trim().length != 0) {
            setCurrentItems(currentItems.filter(item => item.name.toLowerCase().includes(v.toLowerCase())))
          } else {
            setCurrentItems(todos)
          }
            setTodo(v)
          }}
        // onChange={(e)=>setquery()}
          // value={todo}
        />
        {/* Button */}
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
          <Text style={{ color: "white" }}>Search</Text>
      </TouchableOpacity>
      <ScrollView>
      <FlatList
        data={currentItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />

        </ScrollView>
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
