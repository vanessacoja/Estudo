"use server";

export default async function login(formData: FormData){
    const username = formData.get('username') as string| null;
    const password = formData.get('password') as string|null;
    console.log(formData.get('username'));


}