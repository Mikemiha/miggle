import { useState } from "react"
import { Privates } from "./privates"
import { Community } from "./community"
import { Teambuilding } from "./teambuilding"
import { Polterabend } from "./polterabend"

const boxClassName =
  "rounded-2xl aspect-square p-2 lg:p-4 flex flex-col gap-2 lg:gap-4 flex flex-col items-center justify-around"

export const Services = () => {
  const [selected, setSelected] = useState<number | undefined>(undefined)

  /* with/without hover icons:

  With friend:
  - 1 resting on back & elbows, 1 standing at feet
  - bird without hands, flyer arching & happy/exclaiming

  With a group:
  - 3 couple, all talking
  - 1 couple in star, 1 in bird, 1 in backbend

  Tith the community
  - circle of people
  - acro pyramid
  */

  return (
    <>
      <section
        aria-label="services"
        className="w-full p-4 lg:p-6 flex flex-col gap-4 lg:gap-6"
      >
        <h1 className="font-bold text-2xl italic text-amber-700 text-center">
          I want to try Acroyoga
        </h1>
        <div className="grid grid-cols-3 justify-between gap-4 lg:gap-6 text-lg lg:text-xl font-semibold text-center text-black">
          <div
            className={`${
              selected === 0 ? "bg-green-300" : "bg-green-500 cursor-pointer"
            }  hover:bg-green-400 ${boxClassName}`}
            onClick={() => setSelected(0)}
          >
            <p>With a friend!</p>
          </div>
          <div
            className={`${
              selected === 1 ? "bg-red-200" : "bg-red-400 cursor-pointer"
            } hover:bg-red-300 ${boxClassName}`}
            onClick={() => setSelected(1)}
          >
            <p>With a group!</p>
          </div>
          <div
            className={`${
              selected === 2 ? "bg-yellow-200" : "bg-yellow-400 cursor-pointer"
            } hover:bg-yellow-300 ${boxClassName}`}
            onClick={() => setSelected(2)}
          >
            <p>With the community!</p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-6 lg:px-6">
        <Privates selected={selected === 0} />
        <Polterabend selected={selected === 1} />
        <Teambuilding selected={selected === 1} />
        <Community selected={selected === 2} />
      </section>
    </>
  )
}
