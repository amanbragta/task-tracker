import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTasks } from "../features/tasks/taskSlice"
import { Box, Button, MenuItem, Select, TextField } from "@mui/material"

export default function InputArea(){
     const [newTask, setNewTask] = useState('')
     const [priority,setPriority] = useState(1)
     const dispatch = useDispatch()
     function handleSelect(e){
        setPriority(e.target.value)
      }
    return(
        <Box sx={{display:'flex', justifyContent:'center', p:2, alignItems:'center', flexDirection:{xs:'column',md:'row'}, gap:3, mt:3}}>
        <Box sx={{width:{md:'40%',xs:'100%'}, mx:2}}>
        <TextField id="standard-basic" variant="standard" value={newTask} onChange={e=> setNewTask(e.target.value)} fullWidth/>
        </Box>
        <Box>
        <Select
      onChange={handleSelect}
      value={priority}
      >
        <MenuItem value={1}>Low</MenuItem>
        <MenuItem value={5}>Mid</MenuItem>
        <MenuItem value={10}>High</MenuItem>
      </Select>
      <Button onClick={()=>{
        dispatch(addTasks({text:newTask, priority}))
        setNewTask('')
        }} sx={{ml:3,px:3, py:1}}
        variant="contained"
        >Add</Button>
        </Box>
        </Box>
    )
}