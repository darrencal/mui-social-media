import { Box, Stack } from '@mui/material';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import RightSidebar from './components/RightSidebar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </Stack>
    </Box>
  );
}

export default App;
