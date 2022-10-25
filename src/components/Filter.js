import React from 'react'
import { View, TextInput } from 'react-native'
import { useRef } from 'react'
import { filteredUsers } from '../redux/taskSlice'

const Filter = () => {
    const inputRef = useRef("")
    const filterUsers=()=>{}
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
              placeholder="Search by name"
              ref={inputRef}
              onChange = {filterUsers}
          
        />
    </View>
  )
}

export default Filter