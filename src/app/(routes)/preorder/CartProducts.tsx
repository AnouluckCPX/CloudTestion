import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import TableList from './components/TableList';

export default function CartProducts({ }) {
    return (
        <Box sx={{ bgcolor: '#fff', p: 1 }}>
            <Container maxWidth="xl" >
                <TableList />
            </Container>
        </Box>
    )
}
