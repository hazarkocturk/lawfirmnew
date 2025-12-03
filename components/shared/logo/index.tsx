import Image from "next/image";
import logo from "@/public/logo.png";

export const Logo = () => {
  return (
    <div className="relative w-60 md:w-80">
      <Image
        src={logo}
        alt="Logo"
        width={320}
        height={80}
        priority
        className="dark:invert h-auto w-full"
      />
    </div>
  );
};
