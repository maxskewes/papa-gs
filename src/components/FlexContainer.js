import { Container } from '@mui/material';

const FlexContainer = ({ children, column }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...( column === true && {flexDirection: 'column'}),
      }}>
 {children}
    </Container>
  );
};

export default FlexContainer;
