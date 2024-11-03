import Drawer from "../drawer/drawer"
import Hero from "../hero/hero"
import What from "../sections/what"
import Why from "../sections/why"
import Who from "../sections/who"
import How from "../sections/how"
import Connect from "../sections/connect"


const MainSection = () => {
  
  return (
    <>
      <div
        className="overflow-auto w-screen flex-grow"
      
      >
        <Hero/>
        <Drawer />
        <Why />
        <Who />
        <What />
        <How />
        <Connect />
      </div>
    </>
  )
}

export default MainSection