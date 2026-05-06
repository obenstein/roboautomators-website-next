import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="block ">
      <Image
        src="/images/logo/logo1.png"
        alt="RoboAutomators Logo"
        width={150}
        height={150}
        className="object-contain"
        quality={100}
        priority
      />
    </Link>
  );
};

export default Logo;
