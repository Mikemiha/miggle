import { Carousel } from "./components/Carousel"
import { Services } from "./components/Services"

function App() {
  return (
    <div className="mx-auto w-full lg:w-[1020px] flex flex-col items-center overflow-hidden">
      <Carousel />
      <Services />
    </div>
  )
}

export default App
