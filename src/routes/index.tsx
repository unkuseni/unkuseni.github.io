import { createFileRoute } from "@tanstack/react-router";
import { Drawer, VerticalDrawer } from "@/components/drawer/drawer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/nav/nav";
import Connect from "@/components/sections/connect";
import How from "@/components/sections/how";
import What from "@/components/sections/what";
import Who from "@/components/sections/who";
import Why from "@/components/sections/why";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const scrollRef = useHorizontalScroll();

  return (
    <div className="bg-hero-pattern bg-center bg-no-repeat md:h-full md:flex md:flex-col">
      <Navbar title="unkuseni's portfolio" />
      <div
        ref={scrollRef}
        className="md:flex-1 md:flex relative md:overflow-x-auto md:overflow-y-hidden md:border-t border-t-white md:snap-x md:snap-mandatory scroll-smooth"
      >
        <Hero />
        <Drawer className="md:hidden" />
        <VerticalDrawer className="md:flex hidden" />
        <Why />
        <Who />
        <What />
        <How />
        <Connect />
      </div>
    </div>
  );
}
