import Image from "next/image";

type LogoProps = {
  size?: number;
};

export function Logo({ size = 28 }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Image src="/axerium.svg" alt="Axerium" width={size} height={size} priority />
      <span className="sr-only">Axerium</span>
    </div>
  );
}


