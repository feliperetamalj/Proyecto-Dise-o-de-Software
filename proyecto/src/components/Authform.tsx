import React, { useState, useEffect, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import './AuthForm.css';

interface AuthFormProps {
  mode: "Signup" | "Login";
  onSubmit: (data: { email: string, password: string }) => void;
  resetForm?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit, resetForm }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (resetForm) {
      setEmail("");
      setPassword("");
    }
  }, [resetForm]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="auth-form-container">
      <h1>{t(`${mode.toLowerCase()}.title`)}</h1>
      <form onSubmit={handleSubmit} className="auth-form">
        <div>
          <label className="auth-label">{t('login.email')}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="auth-input"
          />
        </div>
        <div>
          <label className="auth-label">{t('login.password')}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="auth-input"
          />
        </div>
        <button
          type="submit"
          className="auth-button"
        >
          {t(`${mode.toLowerCase()}.submit`)}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;