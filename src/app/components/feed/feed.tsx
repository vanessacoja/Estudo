//import { Photo } from "@/actions/photo-get"; // Certifique-se que esse caminho está certo

import FeedPhotos from "./feed.photos";

export default function Feed({ photos }: {photos: any}) {

  return (
    <div>
      <FeedPhotos photos={photos}/>
    </div>
  );
}




