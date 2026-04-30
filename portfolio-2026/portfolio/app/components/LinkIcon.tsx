import Image from "next/image";

interface LinkIconProps {
  href: string;
  size?: number;
}

export default function LinkIcon({ href, size = 30 }: LinkIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center transition-transform duration-300 ease-out hover:scale-125 hover:-translate-y-0.5 hover:rotate-[-10deg]"
    >
      <Image src="/link.svg" alt="link" width={size} height={size} />
    </a>
  );
}
