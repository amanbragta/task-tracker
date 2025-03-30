import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { editTasks, removeTasks, toggleCheck } from "../features/tasks/taskSlice";
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { pink } from '@mui/material/colors';

export default function Task({text,id,completed}){
    const dispatch = useDispatch()
    const [isEditMode, setIsEditMode] = useState(false)
    const [updatedText,setUpdatedText] = useState(text)
    const [check,setCheck] = useState(completed)

    function handleEdit(){
        dispatch(editTasks({id:id,text:updatedText}))
        setIsEditMode(false)
    }

    function handleBox(){
        dispatch(toggleCheck({id:id, completed:!check}))
        setCheck(!check)
    }
    return (
        <Card sx={{width:'70%', display:'flex', alignItems:'center', justifyContent:'space-between',flexDirection:{md:'row', xs:'column'} , mt:3, p:2}}>
            <Checkbox
                checked={check}
                onChange={handleBox}
                />
            {isEditMode ? (
            <TextField id="standard-basic" variant="standard"
            type="text" value={updatedText} 
            onChange={e=>setUpdatedText(e.target.value)}
            />)
            :(
                <Typography variant="h6">{text}</Typography>
            )}
            <Box sx={{display:'flex', flexDirection:{xs:'row',md:'column'}, justifyContent:{xs:'space-around'}, width:{xs:'100%', md:'10%'}}}>
            <Box>
            {isEditMode? (
                <Button onClick={()=>{
                    handleEdit()
                }}>Save</Button>
            ): (
                <Button onClick={()=>{
                    setIsEditMode(true)
                }}><EditIcon/></Button>
            )}
            </Box>
            <Box>
            <Button onClick={()=>dispatch(removeTasks(id))}><DeleteIcon sx={{ color: pink[500] }}/></Button>
            </Box>
            </Box>
        </Card>
    )
}