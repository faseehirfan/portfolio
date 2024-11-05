import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Photos Coming Soon
      </h1>
      {/* <ImageGrid columns={3} images={[]} /> */}
    </section>
  );
}
