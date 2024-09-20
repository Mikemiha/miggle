export const Community = ({ selected }: { selected: boolean }) => {
  return (
    <div
      className={`${
        selected ? "bg-yellow-200" : "bg-gray-100"
      } overflow-hidden p-4 lg:p-6 lg:rounded-xl`}
    >
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="col-span-2 flex flex-col gap-2 lg:order-1 order-2">
          <h2 className="font-semibold text-xl">Community acroyoga</h2>
          <p>
            Acroyoga is a thriving hobby in Denmark, and you can join the
            community today!
          </p>
          <p>
            The association <span className="italic">Akroyoga København</span>{" "}
            facilitates weekly jams & classes for everyone.
          </p>
        </div>
        <img
          src="/images/supineSidestar.jpg"
          alt="supineSidestar"
          className="rounded-2xl aspect-square overflow-hidden lg:order-2 order-1"
        />
      </div>
    </div>
  )
}
