import { useRouter } from "next/router";

export default function FotoIdPage() {
  const router = useRouter();
  const { id } = router.query; // Captura o parâmetro da URL

  return (
    <main>
      <h1>Foto id: {id}</h1>
    </main>
  );
}                                                                                            