const SpotHistory = ({ tourDetails }) => {
  const history = tourDetails?.history;
  return (
    <div className="my-4 md:my-6 lg:my-8">
      <h1 className="text-3xl font-semibold text-center my-2">
        {history ? history[0] : "No History Found"}
      </h1>
      <div className="space-y-3 my-4">
        {history?.slice(1).map((text, i) => {
          return (
            <div key={i}>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpotHistory;
