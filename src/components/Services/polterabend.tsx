export const Polterabend = ({ selected }: { selected: boolean }) => {
  return (
    <div
      className={`${
        selected ? "bg-red-200" : "bg-gray-100"
      } overflow-hidden p-4 lg:p-6 lg:rounded-xl`}
    >
      <div className="grid grid-cols-3 gap-4 mb-4">
        <img
          src="/images/threeAcroyogis.jpg"
          alt="threeAcroyogis"
          className="rounded-2xl aspect-square overflow-hidden"
        />
        <div className="col-span-2 flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Polterabend</h2>
          <p>
            Start the bachelor(ette) party by connecting with your inner child!
          </p>
          <p>Guaranteed laughs and great memories with friends.</p>
        </div>
      </div>
    </div>
  )
}
