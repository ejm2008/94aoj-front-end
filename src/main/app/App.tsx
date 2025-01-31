import React from 'react'
import AppRouter from "../router/router";
import { AppProvider } from '../../presentation/context/appContext';


function App() {
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    )
}

export default App;
