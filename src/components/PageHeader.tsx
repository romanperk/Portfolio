export const PageHeader = ({
  text1,
  text2,
}: {
  text1: string;
  text2: string;
}) => {
  return (
    <div className="mx-auto max-w-4xl pt-32 sm:pt-42 lg:pt-52 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-gray-100 sm:text-6xl">
        {text1}
      </h1>
      <h1 className="text-5xl font-bold tracking-tight text-gray-100 sm:text-7xl pb-2">
        {text2}
      </h1>
    </div>
  );
};
