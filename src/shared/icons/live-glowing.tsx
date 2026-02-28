import "./live-icon.scss";

interface LiveGlowingProps {
  className?: string;
}

export default function LiveGlowing(props: LiveGlowingProps) {
  const { className } = props;

  return (
    <img
      className={`live-glowing ${className}`}
      src="https://firebasestorage.googleapis.com/v0/b/total-mobility-solution-6c7cc.firebasestorage.app/o/live-glowing.png?alt=media&token=cfb60f93-011e-46e5-ac95-57326c166410"
    />
  );
}
