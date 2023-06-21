import React, { useEffect, useState } from 'react';
import Account from '../Account/Account';
import { getProfileData, updateUserProfile } from '../../tools/api';
import './user.css';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { renameUser } from "../../store/redux";


function User() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  // console.log(firstName, lastName);
  const token = sessionStorage.getItem('token');
  const user = useSelector((state) => state.user);
  // console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    
    if (!token){
      // console.log('No valid token', token);
      navigate('/sign-in');
    }
    // console.log(token)
    // Fetch or set the values for firstName and lastName here
    // For example, you can make an API call to retrieve user data
    const fetchUserData = async () => {
      try {
        const userData = await getProfileData(token);
        dispatch(renameUser(userData));
        // console.log(userData, userData.firstName, userData.lastName);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (user.firstName === '') fetchUserData();
  }, []);

  const handleEditName = () => {
    setIsEditing(true);
  };

  const handleSaveName = () => {
    // Perform save logic here
    setIsEditing(false);
    const userInfo =  {firstName:firstName, lastName:lastName};
    if (firstName === '') userInfo.firstName = user.firstName
    if (lastName === '') userInfo.lastName = user.lastName
    // console.log(user.firstName, user.lastName);
    updateUserProfile(userInfo.firstName, userInfo.lastName, token);
    dispatch(renameUser(userInfo));
  };
  

  return (
    <main className="main bg-dark">
      <div className="header">
        {/* <h1>Welcome back<br />{firstName} {lastName}!</h1> */}
        {isEditing ? (
          <div className="edit-container">
            <div className="edit-name">
              <input
                type="text"
                value={firstName}
                placeholder={user.firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                value={lastName}
                placeholder={user.lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="edit-name-button"> 
              <button onClick={handleSaveName}>Save</button>
              <button onClick={()=>{setIsEditing(false)}}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
            <button className="edit-button" onClick={handleEditName}>
              Edit Name
            </button>
          </div>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}

export default User;