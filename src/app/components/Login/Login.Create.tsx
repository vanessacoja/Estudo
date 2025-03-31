import React from 'react';
import Input from '../forms/input';
import Button from '../forms/button';
//import Error from '../Helper/Error';
//import useForm from '../../Hooks/useForm';
//import { USER_POST } from '../../Api';
//import { UserContext } from '../../UserContext';
//import useFetch from '../../Hooks/useFetch';
//import Head from '../Helper/Head';

const LoginCreate = () => {
 // const username = useForm(); //cria instancia hook useform cada uma liga no campo  const email = useForm('email');
  //const password = useForm();
  const { userLogin } = React.useContext(UserContext); //uso o contexto do usuario para chamar uselogin apos cadastro
  const { loading, error, request } = useFetch(); //criar para requisito http e monitora login erro

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    //Previne o comportamento padrão do <form> (recarregar a página).

//Usa USER_POST() pra preparar a requisição.Usa request() do useFetch pra enviar os dados.

//Se a resposta for ok, loga o usuário automaticamente.


    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }
//redenrização
//Cria a seção da tela de cadastro. Usa os inputs personalizados, passando os props retornados do useForm com spread ({...username} etc.).
  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
//Enquanto loading estiver true, mostra botão desabilitado com texto "Cadastrando..."
//Se não estiver carregando, mostra botão normal "Cadastrar".
//Mostra erros caso existam, usando o componente Error.


 