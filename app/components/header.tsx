import Image from "next/image";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed bottom-0 left-0 mb-4 flex h-auto w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:w-auto lg:bg-none lg:mb-0">
        <a
          href="https://danielpbank.wordpress.com/tag/sies/"
          className="flex items-center justify-center font-nunito text-lg font-bold gap-2"
        >
          <span>Land of Sies Character Explorer</span>
          <Image
            className="rounded-xl"
            src="/flambytoes.png"
            alt="Flambytoes"
            width={40}
            height={40}
            priority
          />
        </a>
      </div>
    </div>
  );
}
