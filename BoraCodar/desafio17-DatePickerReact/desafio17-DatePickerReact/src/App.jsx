// import React from 'react';
import "./App.css";
import CalendarComponent from "./components/Calendar";
import "./index.css";
import "tailwindcss/tailwind.css";

function App() {
    return (
        <div>
            <CalendarComponent className="text-center justify-center bg-zinc-900" />
        </div>
    );
}

export default App;
