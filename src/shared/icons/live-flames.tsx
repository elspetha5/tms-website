import "./live-icon.scss";

interface LiveFlamesProps {
  className?: string;
}

export default function LiveFlames(props: LiveFlamesProps) {
  const { className } = props;

  return (
    <img
      className={`live-flames ${className}`}
      src="https://firebasestorage.googleapis.com/v0/b/total-mobility-solution-6c7cc.firebasestorage.app/o/live-flames.png?alt=media&token=c25823a6-a15b-49c3-8c40-dca7e1f72f51"
    />
  );
}
