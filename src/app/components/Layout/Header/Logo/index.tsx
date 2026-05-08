import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="block ">
      <Image
        src="/images/logo/logo3.png"
        alt="RoboAutomators Logo"
        width={200}
        height={200}
        className="object-contain"
        quality={100}
        priority
      />
    </Link>
  );
};

export default Logo;
