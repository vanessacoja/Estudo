'use server';

import { USER_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import login from './login';

export default async function userPost(state: {}, formData: FormData) {
 //Define a server action userPost, que será usada no formulário de cadastro.
  const username = formData.get('username') as string | null;
  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;
//Extrai os campos do formulário HTML enviados: username, email, password.
  try {
    if (!username || !email || !password) throw new Error('Preencha os dados.');//Valida se todos os campos estão preenchidos.
    if (password.length < 6)
      throw new Error('A senha deve ter mais de 6 dígitos.');//Verifica se a senha tem pelo menos 6 caracteres.
    const { url } = USER_POST();//Obtém a URL da API de criação de usuário.
    const response = await fetch(url, {//Envia os dados do novo usuário para a API, usando o corpo do formData.

      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Email ou usuário já cadastrado.');
    const { ok } = await login({ ok: true, error: '' }, formData);
    if (!ok) throw new Error('Error ao logar.');
    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
'}'