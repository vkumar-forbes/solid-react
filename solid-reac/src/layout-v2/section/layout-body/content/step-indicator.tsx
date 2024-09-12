type StepIndicatorType = {
  currentStep: number;
  totalStep: number;
};

export default function StepIndicator({
  currentStep,
  totalStep,
}: StepIndicatorType) {
  return (
    <div className="w-full text-center">
      <div className="w-full fixed bottom-0 bg-white/80 md:static z-40">
        <p className="text-neutral-400 p-2">{`${currentStep} of ${totalStep} questions answered`}</p>
        <div className="w-full bg-secondary-foreground">
          <div
            className="bg-secondary h-2.5 transition-all"
            style={{ width: `${(currentStep / totalStep) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
