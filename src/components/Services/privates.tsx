export const Privates = ({ selected }: { selected: boolean }) => {
  return (
    <div
      className={`${
        selected ? "bg-green-300" : "bg-gray-100"
      } overflow-hidden p-4 lg:p-6 lg:rounded-xl`}
    >
      <div className="grid grid-cols-3 gap-2 lg:gap-4 items-center">
        <div className="col-span-2 flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Private sessions</h2>
          <p>2-hour sessions with either your friend, partner or just you!</p>
          <p>
            No prior experience necessary, we adjust the level and skills to
            you.
          </p>
        </div>
        <img
          src="/images/supineSidestar.jpg"
          alt="supineSidestar"
          className="rounded-2xl aspect-square overflow-hidden"
        />
      </div>
    </div>
  )
}
