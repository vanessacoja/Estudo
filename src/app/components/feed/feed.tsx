import { Photo } from "@/actions/photo-get"; // Certifique-se que esse caminho está certo

export default function Feed({ photos }: { photos: Photo[] }) {
  return (
    <ul>
      {photos.map((photo, i) => (
        <li key={photo.id + '-' + i}>
          {photo.title}
        </li>
      ))}
    </ul>
  );
}
