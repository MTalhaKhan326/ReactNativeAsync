import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    filtered: [],
    task: [],
    CatHigh: [],
    CatMedium: [],
    CatLow:[],
    filter: null,
  },
  reducers: {
    addTask: (state, action) => {
      console.log(nanoid());
      // 'dgPXxUz_6fWIQBD8XmiSy'

      console.log("actionsss",action.payload);
      const newTask = {
        id: action.payload.id,
        name: action.payload.name,
        isFavorite: action.payload.isFavorite,
        priority:action.payload.priority
       
      };
      state.task.push(newTask);
      
    },
     updateTasks: (state, action) => {
      console.log('**********************')
      // console.log(action.payload)
      state.task=action.payload 
    },
    deleteTask: (state, action) => {
      console.log(action.payload.id);
      console.log(state.task);
      const newstate = state.task.filter((item) => item.id !== action.payload.id);
      state.task = newstate;
      // return state.task
      // console.log("find..", find)
      // return find
    },
    updateTask: (state, action) => {
      console.log("updateid = ", action.payload.id);
      console.log("State =", state)
      let updatedData = state.task.find((item) => item.id === action.payload.id)
      updatedData.name = action.payload.name
      updatedData.priority = action.payload.priority
      
      console.log("updatedname...................................",updatedData )    
   },
     Favorite: (state, action) => {
      const task = action.payload.task
      const selectedTask = state.task.find(item => item.id === task.id)
      selectedTask.isFavorite = !selectedTask.isFavorite
    },
     
      addnewTask: (state, action) => {
      console.log(nanoid());
      // 'dgPXxUz_6fWIQBD8XmiSy'

      // console.log("actionsss",action.payload);
     
      state.task.push(action.payload);
      console.log("state :", state)
    },
   
    filteredUsers: (state, action) => {
      console.log("stateeee", action.payload.name)
      let find = state.task.filter(item => item.name.toLowerCase().includes(action.payload.name.toLowerCase()))
      console.log("finddd", find)
      state.filtered = find
      console.log("filtered",state.filtered);
    //  console.log( state.filtered.push(find))
   
    },
   
    //  CategoryHigh: (state, action)=>{
    //   const task = action.payload.task
    //    const selectedTask = state.task.find(item => item.id === task.id)
    //    console.log("selected Task :", selectedTask)
    //    selectedTask.isHigh = !selectedTask.isHigh
    //     if (selectedTask.isHigh) {
    //         state.CatHigh.push(selectedTask)
    //   console.log("filtered",state.CatHigh);
    //      }
    //  },
    //   CategoryMedium: (state, action)=>{
    //   const task = action.payload.task
    //   const selectedTask = state.task.find(item => item.id === task.id)
    //     selectedTask.isMedium = !selectedTask.isMedium
    //      if (selectedTask.isMedium) {
    //         state.CatMedium.push(selectedTask)
    //   console.log("filtered",state.CatMedium);
    //      }
    // },
    updatePriority: (state, action) => {
      const task = action.payload.task
      const selectedTask = state.task.find(item => item.id === task.id)
      selectedTask.priority = action.payload.priority
      //Add Data in High category and remove from low and medium category
      //***************************
      // if (selectedTask.priority == 1) {
      //   const delMedium = state.CatMedium.filter((item) => item.id !== selectedTask.id);
      //   state.CatMedium = delMedium;
      //   console.log("Mediumstate =",state.CatMedium)
      //    const delLow = state.CatLow.filter((item) => item.id !== selectedTask.id);
      //   state.CatLow = delLow;
      //   console.log("Lowstate =",state.CatLow)
      //   state.CatHigh.push(selectedTask)
      //   console.log("CategoryHigh =",state.CatHigh)
      // }
      // //Add Data in Medium category and remove from low and High category
      // //***************************
      // else if (selectedTask.priority == 2) {
      //   const delHigh = state.CatHigh.filter((item) => item.id !== selectedTask.id);
      //   state.CatHigh = delHigh;
      //   console.log("Highstate =",state.CatHigh)
      //    const delLow = state.CatLow.filter((item) => item.id !== selectedTask.id);
      //   state.CatLow = delLow;
      //   console.log("Lowstate =",state.CatLow)
      //   state.CatMedium.push(selectedTask)
      //   console.log("CategoryMedium =", state.CatMedium)
      // }
      //   //Add Data in Low category and remove from High and medium category 
      //   //***************************
      // else {
      //    const delHigh = state.CatHigh.filter((item) => item.id !== selectedTask.id);
      //   state.CatHigh = delHigh;
      //   console.log("Highstate =", state.CatHigh)
      //    const delMedium = state.CatMedium.filter((item) => item.id !== selectedTask.id);
      //   state.CatMedium = delMedium;
      //   console.log("Mediumstate =",state.CatMedium)
      //   state.CatLow.push(selectedTask)
      //   console.log("CategoryLow =",state.CatLow)
      // }
      console.log("SelectedTask,, :",selectedTask)
    },
    //    CategoryLow: (state, action)=>{
    //   const task = action.payload.task
    //   const selectedTask = state.task.find(item => item.id === task.id)
    //      selectedTask.isLow = !selectedTask.isLow
    //       if (selectedTask.isLow) {
    //         state.CatLow.push(selectedTask)
    //   console.log("filtered",state.CatLow);
    //      }   
    //  },
    //  filteredHighCategory: (state, action) => {
    //   // console.log("stateeee", action.payload.name)
    //    console.log("actionHigh :", action.payload)
    //   let find = state.task.filter(item => item.isHigh === action.payload.task.ishigh)
    //   console.log("finddd", find)
    //   state.CatHigh = find
    //   console.log("filtered",state.CatHigh);
    // //  console.log( state.filtered.push(find))
   
    //  }
  },
});

export const { addTask, deleteTask, Favorite,updateTask, addnewTask , filteredUsers , updatePriority, updateTasks } = taskSlice.actions;

export default taskSlice.reducer;
