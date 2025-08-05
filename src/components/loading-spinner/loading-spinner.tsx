import "./loading-spinner.scss";

export default function LoadingSpinner() {
  const circleArr = Array(6).fill(
    <circle cx="12" cy="12" r="10" className="loader__value" />
  );

  return (
    <svg className="loader" height="60px" viewBox="0 0 24 24" width="60px">
      {circleArr.map((circle) => circle)}
    </svg>
  );
}
