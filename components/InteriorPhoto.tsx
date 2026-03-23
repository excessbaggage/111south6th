import { photos } from "@/lib/data";

export default function InteriorPhoto() {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${photos[6]})` }}
      />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
    </div>
  );
}
