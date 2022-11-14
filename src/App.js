import React, {Suspense, lazy} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

const Hello1 = lazy(() => import("./Hello1"))
const Hello2 = lazy(() => import("./Hello2"))

function App() {
    return (

        <div>
            <BrowserRouter>
                <Suspense fallback="waiting">
                <ul>
                    <li>
                        <Link to="hello1">hello1</Link>
                    </li>
                    <li>
                        <Link to="hello2">hello2</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="/hello1" element={<Hello1/>}/>
                    <Route path="/hello2" element={<Hello2/>}/>
                </Routes>
                </Suspense>
            </BrowserRouter>
        </div>


    );
}


export default App;
