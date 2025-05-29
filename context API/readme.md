
# <center>Context API in React</center>

## 📌 Why Do We Need Context API?

When working with deeply nested components in React, **passing props manually through each level** becomes difficult and inefficient. Even if intermediate components don’t need the data, they still have to forward it to the child components.

➡️ **Context API** solves this problem by creating a **centralized data store**, allowing any component to directly access data without prop drilling.

---

## 🛠️ Steps to Set Up Context API

### ✅ Step 1: Create a `context` Folder

Inside your `src/` folder, create a new folder called:

```
/context
```

---

### ✅ Step 2: Create `UserContext.js`

This file will create the context object.

```js
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

---

### ✅ Step 3: Create `UserContextProvider.jsx`

This component will provide the context to your application.

```js
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    const [User, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ User, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
```

---

### ✅ Step 4: Wrap `<App />` in `main.jsx`

Wrap your app with the context provider.

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import UserContextProvider from './context/UserContextProvider';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
```

---

## ✍️ How to Use the Context API

### 🔐 Setting Data (Login Component)

```js
import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ Username, Password });
        console.log("User logged in:", { Username, Password });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Username input */}
            <input
                type="text"
                placeholder="Username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {/* Password input */}
            <input
                type="password"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
```

---

### 👤 Accessing Data (Profile Component)

```js
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    const { User } = useContext(UserContext);

    if (!User) {
        return <h1>Please login</h1>;
    }

    return (
        <div>
            <h1>Welcome, {User.Username}!</h1>
        </div>
    );
};

export default Profile;
```

---

## 📦 Folder Structure

```
src/
│
├── context/
│   ├── UserContext.js
│   └── UserContextProvider.jsx
│
├── components/
│   ├── Login.jsx
│   └── Profile.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🚀 Benefits of Context API

* Eliminates **prop drilling**
* Centralized **global state**
* Easy to **share data** between components
* Lightweight alternative to Redux for small apps

---

## 🙌 Final Notes

* Use Context API for **small to medium-scale applications**.
* For large-scale apps with complex state, consider Redux or Zustand.


