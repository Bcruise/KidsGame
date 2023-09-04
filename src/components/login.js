import '../styling/login.css';

function Login({setLoginOrRegister}) {
  return (
    <div className='login'>
      <div className='box'>
        <input
            placeholder='Username...'
        ></input>
        <input
            placeholder='Password...'
        ></input>
        <button>Login</button>
        <hr></hr>
        <button
            onClick={() => setLoginOrRegister('register')}
        >Register</button>
      </div>
    </div>
  );
}

export default Login;