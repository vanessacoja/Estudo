'use server';

import { error } from "console";
import { ApiError } from "next/dist/server/api-utils";
import { cookies } from "next/headers";

//import {USE_GET} from '@/function /api';
//import { ApiError } from '@/functions/api-error';
//import {cookes} from 'next/headers';

export type User = {
    id: number;
    email:string;
    username :string;
    nome: string;
    //define um tipo user, que e o formato esperado da resposta da api
}

export default async function userGet() {
    try {
        const token = (await cookies()).get('token')?.value; //logica principal , nela tenta pegar o cokie e chama token
        if (!token) throw new Error('Token não encontrado');
        const {url} = USER_GET();
        const response = await fetch(url, {
            method: 'GaET',
            headers: {
                Authorization: 'Bearer' + token,
            },
            next: {
                revalidate: 60,
                //Faz uma requisição GET à API com o token JWT no header de autorização.

//A opção next.revalidate: 60 diz para o Next.js revalidar os dados a cada 60 segundos (ISR – Incremental Static Regeneration).
         });
        if (!response.ok) throw new Error('Erro ao pegar o usuário.');
        const data =(await response.json() as User;
        return {data, ok: true, error: ''};
        caches(error: unknown) { 
        return ApiError(error);
        } 