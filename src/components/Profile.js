import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const id = localStorage.getItem('id');
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (!response.ok) {
          throw new Error('Error fetching profile data');
        }
        const data = await response.json();
        console.log(data)
        setUser(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/login');
  };

  return (
    <div>
      {user && (
        <div className="container2" >   
        <div className="profile">
              <h1>Profile</h1>
              <img style={{width: '40px',height:'40px'}} src={user.image} alt="" />
              <p>Full Name: {user.firstName} {user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Phone No.: {user.phone}</p>
                <p>Gender: {user.gender} </p>
                <p>Address: {user.address.address} {user.address.city}</p>
                <p>Company: {user.company.name}</p>
                
              <button style={{margin:'0', padding:'5px',height:'40px'}} type="submit" onClick={handleLogout}> Logout</button>
          </div>
          <div className="div">
          </div>
      </div>
      )}
    </div>
  );
};

export default Profile;
