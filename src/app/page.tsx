import photoGet from "@/action/photo-get";
import Feed from "./components/feed/feed";

export default async function Home() {
  const response = await fetch('https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0');
  const data = await photoGet();//Puxando os dados
  console.log(data); 
   
  // Você pode passar "data" como prop para o componente Feed, se necessário
  return (
    <section className="container main Containainer">
       <h1 className="title">Dogs Next</h1>
      <Feed photos={data} />

      
    </section>
  );
}
