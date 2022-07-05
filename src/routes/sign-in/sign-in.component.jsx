import {
  signInWithGoogle,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logUser = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = createUserDocFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logUser}>Sign In</button>
    </div>
  );
};

export default SignIn;
