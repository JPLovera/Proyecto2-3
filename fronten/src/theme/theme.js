import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h6: {
      margin:"20px",
      '&:hover': {
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Agrega una sombra suave al hacer hover
        transition: 'box-shadow 0.5s', // Agrega una transición suave de 0.3 segundos
      },
    },
  },
});

export default theme;