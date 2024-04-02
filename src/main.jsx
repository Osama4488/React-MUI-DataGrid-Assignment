import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';
import "./App.css"
// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <ThemeProvider theme={darkTheme}> */}

      <ConfigProvider theme={{
  algorithm: theme.darkAlgorithm,
      }}
      
      >
        <CssBaseline/>
    <App />
    </ConfigProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
)
