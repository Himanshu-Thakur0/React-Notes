# <center>Context API</center>

### Why we need this Context Api ?

we need the context api because when there is so many nested components and if the most inner one component need data then all the parents and grand parents component has to be data passed down using props even they dont need that data but has to passed otherwise the inner component connot access it.

So , In order to solve this we will use the context API - a centeralized store which will store the data and components has to directly call it as an API



## Steps To Create Context API :-

- Step 1 : First create a folder , named <b>context</b>.
- Step 2 : Then create file inside the context folder <b>UserContext.js</b> (this context file is for user data) .

```js
import React from "react";

const UserContext = React.createContext()

export default UserContext;
```

- Step 3 : Now create another file which is the context provider.Here we will create <b>userContextProvider.jsx</b>
```js
import React, {useState} from 'react'
import UserContext from './UserContext'

const userContextProvider = ({children}) => {
    const [User, setUser] = useState(null)
  return (
    <UserContext.Provider value={{User, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default userContextProvider

```
- Step 4 : Now go in the main.jsx and wrap the <b>App</b> component inside the <b>Usercontext.Provider</b> like below code 👇

```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext.Provider>
      <App />
    </UserContext.Provider>
  </StrictMode>,
)

```

- Step 5 : Now import the <b>useContext()</b> hook to use and set the data.

Setting The Data 👇
```js
import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    let { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ Username, Password });
        console.log("User logged in:", { Username, Password });
    };
    return (
        <form className="w-[40vw] mx-auto">
            <div className="mb-5">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your email
                </label>
                <input
                    type="text"
                    id="email"
                    value={Username}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your password
                </label>
                <input
                    type="password"
                    id="password"
                    value={Password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                    />
                </div>
                <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Remember me
                </label>
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </form>
    );
};

export default Login;

```

Using The Data 👇
```js
import React,{useContext} from 'react'
import UserContext from '../context/UserContext';

const Profile = () => {
    const {User} = useContext(UserContext);
    if (!User) {
        return <h1 className='text-4xl text-white font-bold'>Please Login</h1>
    }
  return (
    <div>
      <h1 className='text-4xl text-white font-bold'>Profile : {User.Username}</h1>
    </div>
  )
}

export default Profile
```
