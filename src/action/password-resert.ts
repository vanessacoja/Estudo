'use serve';

//import { PASSWORD_RESET } from '@/functions/api';
//port apiError from '@/functions/api-error';
//import { redirect } from 'next/navigation';

//PASSWORD_RESET: uma função que retorna a URL da API de redefinição de senha.

//apiError: função personalizada para lidar com erros de forma padronizada.

//redirect: função de redirecionamento do Next.js para navegação no servidor

export default async function passwordReset(state: {}, formData: FormData) {
    
//  Define a função padrão passwordReset. Recebe um state (objeto vazio, provavelmente porque o formulário não depende de estado inicial).

//Recebe formData, que contém os dados enviados pelo formulário HTML.
    const login = formData.get('Login') as string | null;
    const key = formData.get('Key') as string | null;
    const password = formData.get('password')  as string |null;
    //extrair os dados do formulario : login e senha , token de deredinição key e nova senha
    try {
        if (!login || !key|| ! password) throw new Error('preenche os dados');
        //verifica se algum campo esta vazio , se sim lança um erro com pensagem personalizada
        const { url } = PASSWORD_RESET();
        const response = await fetch(url, {
             method: 'POST',
             body: formData,
      //Envia os dados via fetch com método POST diretamente com o formData.
    });
        if (!response.ok) throw new Error('Não autorizado.');
        //Se a resposta da API não for 2xx, lança um erro com a mensagem "Não autorizado."
  }     catch (error: unknown) {
    //captura qualquer erro durante o processo e o retorna formatado pela funcao apiError
        return apiError(error);
  }
  redirect('/login');
}

