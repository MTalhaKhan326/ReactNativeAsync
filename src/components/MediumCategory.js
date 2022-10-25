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
import { deleteTask , Favorite , filteredUsers , filteredMediumCategory } from "../redux/taskSlice";
import { useDispatch } from "react-redux";

const MediumCategory = ({navigation}) => {
  const dispatch = useDispatch();
//   const [todo, setTodo] = useState("");
    const todos = useSelector((state) => state.tasks.task);
    const priority = todos.filter((item) => item.priority == '2');
    // setTodo = priority
    console.log("tododss", priority);
    
    // console.log("Todo",todo)

  
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
        </View>
    );
  };

  return (
    <View>
      
     
      <FlatList
        data={priority}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MediumCategory;

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
