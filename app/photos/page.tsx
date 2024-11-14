import { ImageGrid } from "app/components/image-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/IMG_0108.png", alt: "Stawamus Cheif First Peak" },
          { src: "/photos/IMG_0533.png", alt: "Cinematic car shot" },
          { src: "/photos/IMG_0122.png", alt: "Stawamus Chief Valley" },
          { src: "/photos/IMG_7443.png", alt: "Car at Krispy Kreme" },
          { src: "/photos/IMG_0360.png", alt: "Golden Gate Bridge" },
          { src: "/photos/IMG_0144.png", alt: "Stawamus Cheif Third Peak" },
          { src: "/photos/IMG_0471.png", alt: "White Rock Beach" },
          { src: "/photos/IMG_7505.png", alt: "My car at the station" },
          { src: "/photos/IMG_5319.png", alt: "New York Skyline" },
          { src: "/photos/IMG_0048.png", alt: "Tunnel Bluffs" },
        ]}
      />
    </section>
  );
}
