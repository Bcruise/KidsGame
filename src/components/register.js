import '../styling/register.css';
import { useState } from 'react';
import img1 from '../images/3840.webp';
import img2 from '../images/cartoon-funny-bird-flying-isolated-on-white-background-free-vector.jpg';
import img3 from '../images/cute-dog-cartoon-character-illustration-free-vector.jpg';
import img4 from '../images/How-to-draw-a-cartoon-character-1.webp';
import img5 from '../images/how-to-draw-a-cartoon-panda-featured-image-1200-960x1024.webp';
import img6 from '../images/MTP-Chase-1.png';

function Register() {

    const [userDetails, setUserDetails] = useState({
        name: '',
        password: '',
        avatar: '',
    });

    const CheckDetails = () => {
        for (const key in userDetails) {
            if (userDetails[key] === '') {
                return false
            }
        }
        return true
    }

  return (
    <div className='register'>
      <div className='box'>
        <input
            placeholder='name'
            onInput={e => setUserDetails({...userDetails, name: e.target.value})}
        ></input>
        <input
            placeholder='password'
            onInput={e => setUserDetails({...userDetails, password: e.target.value})}
            type='password'
        ></input>
        <div className='avatar-div'>
            <div>
              <label>Choose an avatar</label>
            </div>
            <div className='avatar-img-container row'>
              <img src={img1} onClick={() => setUserDetails({...userDetails, avatar: img1})}></img>
              <img src={img2} onClick={() => setUserDetails({...userDetails, avatar: img2})}></img>
              <img src={img3} onClick={() => setUserDetails({...userDetails, avatar: img3})}></img>
              <img src={img4} onClick={() => setUserDetails({...userDetails, avatar: img4})}></img>
              <img src={img5} onClick={() => setUserDetails({...userDetails, avatar: img5})}></img>
              <img src={img6} onClick={() => setUserDetails({...userDetails, avatar: img6})}></img>
            </div>
        </div>
        <button>Confirm</button>
        {!CheckDetails() && <span className='error'>Enter all details</span>}
      </div>
    </div>
  );
}

export default Register;