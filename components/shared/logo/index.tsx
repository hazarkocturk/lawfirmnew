import Image from "next/image"
import logo from "@/public/logo.png"

export const Logo = () => {
    return (
        <div className="relative w-40 md:w-56 aspect-[4/1]">
        <Image
        src={logo}
        alt="Logo"
        fill
        className="dark:invert"
        />
        </div>
    )
}