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
