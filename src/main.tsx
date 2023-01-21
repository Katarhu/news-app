import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import {ThemeProvider} from "@mui/material";
import theme from "./material/theme";

import {Provider} from "react-redux";
import {store} from "./store";

import './index.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
