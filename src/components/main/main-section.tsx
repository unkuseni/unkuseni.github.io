import Drawer from "../drawer/drawer"
import Hero from "../hero/hero"


const MainSection = () => {
  
  return (
    <>
      <div
        className="overflow-auto w-screen flex-grow"
      
      >
        <Hero />
        <Drawer />
        <div>
          why 01
        </div>
        <div>
          who 02
        </div>
        <div>
          what 03
        </div>
        <div>
          how 04
        </div>
        <div>connect</div>
      </div>
    </>
  )
}

export default MainSection