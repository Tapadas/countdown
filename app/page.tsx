import styles from "./page.module.css";
import Countdown from "./components/countdown";
import Image from "next/image";
import colosseum from "../public/colosseum.jpeg";

export default function Home() {
  return (
    <div>
      <Image
        src={colosseum}
        alt="rome"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <Countdown />;
    </div>
  );
}
