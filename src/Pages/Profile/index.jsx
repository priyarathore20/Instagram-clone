import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import app from '../../firebaseConfig';

const ProfilePage = () => {
  const [user, setUser] = useState();

  const navigate = useNavigate();
  const auth = getAuth(app);

const currentUser = auth.currentUser
setUser(currentUser)

  const handleClick = () => {
    navigate('/edit-profile');
  };

  return (
    <div className="profile-section">
      <div>
        <Sidebar />
      </div>
      <div className="profile">
        <div className="profile-edit">
          <div>
            <img
              src="https://funylife.in/wp-content/uploads/2023/04/58_Cute-Girl-Pic-WWW.FUNYLIFE.IN_-1-1024x1024.jpg"
              className="avatar-img-1"
            />
          </div>
          <div className="profile-details">
            <div className="profile-username">
              <h4 className="profile-username-name">{user.username}</h4>
              <button className="profile-username-btn" onClick={handleClick}>
                Edit profile
              </button>
            </div>
            <div className="followers">
              <p className="follower">500 followers</p>
              <p className="following">100 following</p>
            </div>
            <p className="name">{user.name}</p>
          </div>
        </div>
        <div className="profile-images">
          <img
            className="profile-img"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <img
            className="profile-img"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <img
            className="profile-img"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <img
            className="profile-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OxRXSBfEhRX-R7rA0l23PJJm1ykw52-DBQ&usqp=CAU"
            alt=""
          />
          <img
            className="profile-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Tte0mvD9fj--zkJGrAwtpGg80FR5h46RHQ&usqp=CAU"
            alt=""
          />
          <img
            className="profile-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSARYeL1jSqKpzI3J0VWO4hgp-9Nkdt05cjsA&usqp=CAU"
            alt=""
          />
          <img
            className="profile-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6fiX-fI2CVsO0hMczk3FCTEI36-PDzcDflA&usqp=CAU"
            alt=""
          />
          <img
            className="profile-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QMaVpVDvxoKzVcSObItabdxDNyqFgPs_fA&usqp=CAU"
            alt=""
          />
          <img
            className="profile-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEyyILt_GYT_3BEOP2DtnlqenNXbPvsx_hw&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
