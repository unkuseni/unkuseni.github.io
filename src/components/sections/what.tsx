import SectionHeader from "./section-header";
import { useInView } from "@/hooks/useInView";
import Carousel from "../carousel/carousel";

interface Project {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  repoLink: string;
}

interface WhatProps {
  worksOnDisplay?: Project[];
}

const DEFAULT_PROJECTS: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — a showcase of custom software craftsmanship built with React, TypeScript, and TanStack. Designed for performance and visual impact.",
    image: "/port.jpeg",
    liveLink: "https://unkuseni.xyz",
    repoLink: "https://github.com/unkuseni/unkuseni.github.io",
  },
];

const What: React.FC<WhatProps> = ({
  worksOnDisplay = DEFAULT_PROJECTS,
}) => {
  const [sectionRef, isInView] = useInView<HTMLElement>({
    threshold: 0.2,
  });
  const title = "what";
  return (
    <section
      className='md:snap-start relative max-sm:pt-5 sm:flex flex-shrink-0 max-sm:bg-[url("/bkg.png")] bg-center bg-no-repeat bg-cover sm:h-[calc(100vh-73px)]'
      ref={sectionRef}
      id="what"
    >
      <div className="p-6 md:min-w-[576px] md:flex md:flex-col md:justify-center md:items-center">
        <SectionHeader digits="003" textNum="three" />
        <div className="overflow-hidden">
          <p className="mx-auto text-center text-[clamp(7rem,30vw,25rem)] leading-[2] font-caslon font-bold uppercase sm:flex">
            {title.split("").map((char, index) => (
              <span
                key={`what-char-${index}-${char}`}
                className="inline-block"
                style={{
                  transform: isInView ? "scaleY(1)" : "scaleY(0)",
                  opacity: isInView ? 1 : 0,
                  transformOrigin: "bottom",
                  transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="md:self-center">
        <article className="p-6 md:w-[576px] md:flex md:flex-col md:items-center md:justify-center md:flex-shrink-0 md:relative md:gap-5">
          <h2 className="text-xl font-bold uppercase">
            Crafting Digital Solutions Through Code
          </h2>
          <p className="font-editorial text-2xl mt-5 leading-10">
            I specialize in building custom web applications that solve real
            problems. From concept to deployment, I focus on creating
            intuitive, performant, and maintainable solutions. My approach
            combines modern development practices with a deep understanding of
            user needs, ensuring every project delivers measurable value.
          </p>
        </article>

        <article className="p-6 md:w-[576px] md:flex md:flex-col md:items-center md:justify-center md:flex-shrink-0 md:relative md:gap-5">
          <h2 className="text-xl font-bold uppercase">Works on Display</h2>
          <p className="font-editorial text-2xl mt-5 leading-10">
            Explore a collection of my software development projects that embody
            my journey towards creating order from chaos. Each piece
            demonstrates my commitment to solving complex problems through code.
            From innovative applications to dynamic web experiences, these works
            highlight my passion for crafting efficient and elegant solutions in
            the realm of software development.
          </p>
        </article>
      </div>
      <Carousel
        className="sm:max-h-[calc(100vh-73px)] h-100"
        list={worksOnDisplay}
      />
    </section>
  );
};

export default What;
