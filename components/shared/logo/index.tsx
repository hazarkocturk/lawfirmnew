import Image from "next/image";
import logo from "@/public/logo.png";

export const Logo = () => {
  return (
    <div className="relative w-45 md:w-65 h-auto">
      <Image
        src={logo}
        alt="Logo"
        width={240}
        height={40}
        priority
        className="h-auto w-full"
      />
    </div>
  );
};
