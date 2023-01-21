import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import theme from "./material/theme";

import './index.css'
import {ThemeProvider} from "@mui/material";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
)
