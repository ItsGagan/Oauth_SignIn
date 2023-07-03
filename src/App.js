import SignUp from './components/signup/SignUp';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId="863195982846-d8441if5og47plkqqj24uppn1qn4f5up.apps.googleusercontent.com">
      <div className="App">
        <SignUp/>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
