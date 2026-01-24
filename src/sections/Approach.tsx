import { approaches } from "../content/approaches";

export const Approach = () => {
  return (
    <div className="container bg-white pt-20 pb-24 text-gray-600" id="approach">
      <h2 className="font-semibold tracking-wider text-gray-500 uppercase">
        Approach
      </h2>
      <p className="mx-auto font-serif text-4xl leading-normal font-bold tracking-[-1px] text-gray-600 md:text-6xl">
        My approach uses a blend of
      </p>
      <div className="mx-auto mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        {approaches.map((approach, i) => (
          <div
            key={i}
            className="flex max-w-[500px] flex-col gap-4 md:flex-row md:items-center"
          >
            <img
              src={approach.image}
              alt=""
              className="h-24 w-40 shrink-0 object-contain"
            />
            <div>
              <p className="mb-2 font-serif text-2xl font-semibold">
                {approach.title}
              </p>
              <p className="text-gray-600">{approach.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
