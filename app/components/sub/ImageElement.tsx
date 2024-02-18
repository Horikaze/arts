import Image from "next/image";
type ImageElementProps = {
  onClick: (imageUrl: string) => void;
};
export default function ImageElement({ onClick }: ImageElementProps) {
  return (
    <div className="h-52 w-52 relative hover:scale-110 transition-all">
      <Image
        onClick={() => {
          onClick("https://picsum.photos/seed/picsum/200/300");
        }}
        src={"https://picsum.photos/seed/picsum/200/300"}
        className="absolute bg-contain rounded-md"
        fill
        alt="image"
      />
    </div>
  );
}
