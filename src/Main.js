import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './index.css';

import Page1 from './pages/Home';

import Comm from './pages/Comms';
import Klasyk from './pages/Klas';
import Popul from './pages/Pop';


export default function Main() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Page1/>} />
                    <Route path="/home" element = {<Page1/>} />
                    <Route path="/pop" element = {<Popul/>} />
                    <Route path="/klas" element = {<Klasyk/>} />
                    <Route path="/comms" element = {<Comm/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}