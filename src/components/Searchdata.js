import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useRef , useState} from "react";
//Ionicons
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Filter from "./Filter";
// import Update from "./Update";
import { Ionicons } from "@expo/vector-icons";
//import useSelector from "react-redux";lea
import { useSelector} from "react-redux";
import { deleteTask , Favorite , filteredUsers } from "../redux/taskSlice";
import { useDispatch } from "react-redux";

const Searchdata = ({navigation}) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
  const todos = useSelector((state) => state.tasks.filtered);
  console.log(todos);

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
    // navigation.navigate('TodoList');
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
      <View>
       
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
      id:item.id,
      name: item.name,
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
        </View>
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
          onChangeText={setTodo}
          value={todo}
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
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Searchdata;

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
