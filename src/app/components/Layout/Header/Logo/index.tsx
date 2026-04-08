import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="relative block w-[160px] h-[42px]">
      <Image
        src="/images/logo/logo1.png"
        alt="RoboAutomators Logo"
        fill
        className="object-contain"
        quality={100}
        priority
      />
    </Link>
  );
};

export default Logo;
