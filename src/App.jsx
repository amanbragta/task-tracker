import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Task from './components/Task';
import { Box, Container } from '@mui/material';
import InputArea from './components/InputArea';
import SortItems from './components/SortItems';


function App() {
  const tasks = useSelector(state=> state.tasks.tasks)
  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{width:'100%', display:'flex', justifyContent:'center', mt:2}}>
        <Typography variant='h1' sx={{textAlign:'center'}}>Your daily tasks</Typography>
        </Box>
      <InputArea/>
      <SortItems/>
      <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      {tasks ? tasks.map(task=>(<Task text={task.text} id={task.id} key={task.id} completed={task.completed}/>)):""}
      </Box>
      </Container>
    </div>
  )
}

export default App
