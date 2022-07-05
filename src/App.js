import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignInForm from './components/sign-in-form/sign-in-form.component';
import SignUpForm from './components/sign-up-form/sign-up-form.component';

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<SignInForm />} />
        <Route path="sign-up" element={<SignUpForm />} />
      </Route>
    </Routes>
  );
};

export default App;
