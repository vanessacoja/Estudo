'use server';

export default async function login(prevState: any, formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  console.log('Usuário:', username);
  console.log('Senha:', password);

  if (!username || !password) {
    return {
      ok: false,
      error: 'Preencha todos os campos.',
      data: null,
    };
  }

  if (username !== 'admin' || password !== '1234') {
    return {
      ok: false,
      error: 'Usuário ou senha incorretos.',
      data: null,
    };
  }

  // Login bem-sucedido
  return {
    ok: true,
    error: '',
    data: { username },
  };
}
