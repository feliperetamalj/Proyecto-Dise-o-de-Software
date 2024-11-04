import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AuthForm from '../../../components/AuthForm';
import { Link } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async (data: { email: string, password: string }) => {
    console.log('Submitting login form');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      setMessage(result.message);
      if (res.status === 200) {
        console.log('Login successful');
        setIsSuccessful(true);
        setIsSuccess(true);
        localStorage.setItem('authEmail', data.email);
        localStorage.setItem('authToken', result.token);
      } else {
        console.error('Login failed:', result.message);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage(t('login.failure'));
      setIsSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {isSuccessful ? (
          <>
            <p className="login-success-message">{t('login.success')}</p>
          </>
        ) : (
          <AuthForm mode="Login" onSubmit={handleLogin} />
        )}
        {message && (
          <p className={`login-message ${isSuccess ? 'login-message-success' : 'login-message-failure'}`}>
            {message}
          </p>
        )}
        {!isSuccessful && (
          <Link to="/password/signup">
            <p className="login-back-to-signup">{t('login.signup')}</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Login;