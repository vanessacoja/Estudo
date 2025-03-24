//import login from '@/actions/login';
//import { useFormState, useFormStatus } from 'react-dom';
//import Button from '@/components/forms/button';
//import Input from '@/components/forms/input';
//import ErrorMessage from '../helper/error-message';
'use client';

import React from 'react';
import Link from 'next/link';
import { useFormState } from 'react-dom'; // se estiver usando o 'react-dom' do Next.js 13+
import styles from './login-form.module.css';
//import Input from './Input';
//import ErrorMessage from './ErrorMessage';
//import { login } from '../actions/login'; // importe sua função de login

function FormButton({ pending }: { pending: boolean }) {
  return (
    <>
      {pending ? (
        <button disabled>Enviando...</button>
      ) : (
        <button type="submit">Entrar</button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton pending={state.pending} />
      </form>

      <Link className={styles.perdeu} href="/login/perdeu">
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  );
}
