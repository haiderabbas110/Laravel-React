import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from 'react-router-dom';

function Main({setToken}){
    return (
        <main class="main">
            <Outlet />
        </main>
    );
}

export default Main;