import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './main/app/App.tsx';

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(
    <App />
);
