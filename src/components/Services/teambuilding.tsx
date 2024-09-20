export const Teambuilding = ({ selected }: { selected: boolean }) => {
  return (
    <div
      className={`${
        selected ? "bg-red-200" : "bg-gray-100"
      } overflow-hidden p-4 lg:p-6 lg:rounded-xl`}
    >
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="col-span-2 flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Teambuilding</h2>
          <p>Challenge and build trust together with your team!</p>
          <p>A safe & inspiring experience that is accessible to everyone.</p>
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
