import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from 'react-router-dom';

function Main({setToken}){
    return (
        <main className="main">
            <Outlet />
        </main>
    );
}

export default Main;