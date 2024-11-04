import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AuthForm from '../../../components/AuthForm';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup: React.FC = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignup = async (data: { email: string, password: string }) => {
    console.log('Submitting signup form');
    try {
      const res = await fetch('/api/auth/password/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      setMessage(result.message);
      if (res.status === 201) {
        console.log('Signup successful');
        setIsSuccessful(true);
        setIsSuccess(true);
      } else {
        console.error('Signup failed:', result.message);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Signup error:', error);
      setMessage(t('signup.failure'));
      setIsSuccess(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        {isSuccessful ? (
          <>
            <p className="signup-success-message">{t('signup.success')}</p>
          </>
        ) : (
          <AuthForm mode="Signup" onSubmit={handleSignup} />
        )}
        {message && (
          <p className={`signup-message ${isSuccess ? 'signup-message-success' : 'signup-message-failure'}`}>
            {message}
          </p>
        )}
        {isSuccessful && (
          <Link to="/password/login">
            <p className="signup-back-to-login">{t('signup.login')}</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Signup;