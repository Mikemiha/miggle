import { useEffect, useState } from "react"

const images = [
  "/images/supineSidestar.jpg",
  "/images/threeAcroyogis.jpg",
  "/images/standingSidestar.jpg",
  "/images/standingH2h.jpg",
] as const

const slideIntervalMs = 4000

export const Carousel = () => {
  const [index, setIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setIndex((prevIndex) => (prevIndex > images.length ? 1 : prevIndex + 1))
    }, slideIntervalMs)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (index > images.length) {
      setTimeout(() => {
        setIsTransitioning(false)
        setIndex(1)
      }, slideIntervalMs - 750)
    }
  }, [index])

  return (
    <div aria-label="carousel" className="w-full grid lg:grid-cols-3">
      <div className="z-10 bg-gradient-to-r from-white to-transparent hidden lg:block" />
      <div className="relative w-full lg:rounded-b-xl h-80">
        {[images[images.length - 1], ...images, images[0], images[1]].map(
          (img, i) => (
            <img
              key={i}
              src={img}
              style={{ transform: `translateX(${(i - index) * 100}%)` }}
              className={`${
                isTransitioning ? "transform duration-1000 ease-in-out " : ""
              }absolute inset-0 w-full h-full object-cover`}
              alt={`Slide ${i + 1}`}
            />
          )
        )}
      </div>
      <div className="z-10 bg-gradient-to-l from-white to-transparent hidden lg:block" />
    </div>
  )
}
