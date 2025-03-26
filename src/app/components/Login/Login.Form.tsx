'use client';

import React, { useTransition } from 'react';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import styles from  './Login.Form.module.css';

//import Input from './Login.InputComponent';
//import ErrorMessage from './ErrorMessage';
//import { login } from '../actions/login';

function FormButton({ pending }: { pending: boolean }) {
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Enviando...' : 'Entrar'}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  const [isPending, startTransition] = useTransition();

  const handleAction = (formData: FormData) => {
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <>
      <form action={handleAction} className={styles.form}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="Senha" name="password" type="password" />
        {state.error && <ErrorMessage error={state.error} />}
        <FormButton pending={isPending} />
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
