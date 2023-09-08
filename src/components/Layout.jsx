import {Box, Button, Card, Stack} from '@mui/material';
import CityInput from './CityInput';
import {useNavigate} from 'react-router-dom';

export default function Layout({children}) {
  const navigate = useNavigate();
  return (
    <Stack spacing={10} alignItems="center" sx={{width: '100%'}}>
      <h2>Everyday PurrCast</h2>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{width: {xs: 'calc(100% - 16px)', md: '90%', lg: '60%'}}}
      >
        <Card sx={{p: 3, width: '100%', overflow: 'visible'}}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button variant="primary" onClick={() => navigate('/')} >
              <img src="/home.svg" alt="Home" width={50} height={50}/>
            </Button>
            <Box sx={{width: '100%'}}>
              <CityInput />
            </Box>
          </Stack>
        </Card>
        <Card sx={{p: 3, width: '100%'}} variant="outlined">
          {children}
        </Card>
      </Stack>
    </Stack>
  );
}
