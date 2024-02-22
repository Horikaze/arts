import { FaCoffee, FaTwitter } from "react-icons/fa";

const supporters = ["123", "456"];
export default function Header() {
  return (
    <div className="h-36 border-b border-b-text/10 p-4 flex justify-between font-semibold">
      <div className="w-full h-full flex flex-col items-start gap-y-2">
        <div className="flex items-center justify-center gap-x-2">
          <FaTwitter className="h-10 w-10" />
          <a
            href="https://twitter.com/horikaze0"
            className="underline"
            target="_blank"
          >
            @horikaze0
          </a>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <FaCoffee className="h-10 w-10" />
          <a
            href="https://ko-fi.com/horikaze"
            className="underline"
            target="_blank"
          >
            https://ko-fi.com/horikaze
          </a>
        </div>
      </div>
      <div className="w-1/2">Supporters: {supporters.join(", ")}</div>
    </div>
  );
}
