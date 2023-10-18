const ContributionProgressBar = ({
  totalAmountRaised,
  remainingAmountNeeded,
}: {
  totalAmountRaised: number;
  remainingAmountNeeded: number;
}) => {
  const raised = 600;
  const needed = 1000;
  // Calculate the progress percentage
  const progress = (totalAmountRaised / remainingAmountNeeded) * 100;

  return (
    <div className="">
      {/* Dynamic progress bar */}
      <div className="relative">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              {totalAmountRaised > remainingAmountNeeded
                ? 100
                : progress.toFixed(2)}
              %
            </span>
          </div>
        </div>
        <div className="flex mb-2 items-center justify-between">
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-teal-600">
              {totalAmountRaised} NGN
            </span>
          </div>
          <div className="text-left">
            {totalAmountRaised > remainingAmountNeeded ? (
              <span className="text-xs font-semibold inline-block text-teal-600">
                {totalAmountRaised} NGN
              </span>
            ) : (
              <span className="text-xs font-semibold inline-block text-teal-600">
                {remainingAmountNeeded} NGN
              </span>
            )}
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
          <div
            style={{
              width: `${
                totalAmountRaised > remainingAmountNeeded ? 100 : progress
              }%`,
            }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ContributionProgressBar;
