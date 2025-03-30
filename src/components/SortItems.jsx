import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortByDate, sortByPriority, sortByStatus } from "../features/tasks/taskSlice";
import { Box, Button, Popover } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';

export default function SortItems(){
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  function handlePop(e){
    setAnchorEl(e.currentTarget)
  }
  function handleClose(){
    setAnchorEl(null)
  }
    return(
        <Box sx={{display:'flex', justifyContent:'center'}}>
      <Button onClick={handlePop}>
        <SortIcon/>Sort
      </Button>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Popover
              open={open}
              onClose={handleClose}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
        <Box sx={{p:2}}>
        <Button onClick={()=>dispatch(sortByStatus())}>Status</Button>
        </Box>
        <Box sx={{p:2}}>
        <Button onClick={()=>dispatch(sortByDate())}>Date</Button>
        </Box>
       <Box sx={{p:2}}>
       <Button onClick={()=>dispatch(sortByPriority())}>Priority</Button>
       </Box>
      </Popover>
        </Box>
      </Box>
    )
}