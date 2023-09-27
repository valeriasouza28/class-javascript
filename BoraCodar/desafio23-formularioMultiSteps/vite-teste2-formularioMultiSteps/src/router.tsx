import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';

export function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
           <Route element={<Step1/>}  path="/" />
           <Route element={<Step2/>}  path="/step2" />
           <Route element={<Step3/>}  path="/step2/step3" />
        </Routes>
    </BrowserRouter>
  );
}