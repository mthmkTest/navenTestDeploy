import classNames from "classnames";

function IconCircleComponent({ className, iconOrText }) {
  const styles = classNames(
    `flex h-full w-full items-center justify-center rounded-full bg-benefitsMedium`,
    className
  );

  return (
    <div className="h-16 w-16 overflow-hidden rounded-full bg-gradient-to-tr from-roundedBorderColor1 from-20% via-roundedBorderColor2 to-roundedBorderColor3 to-80% p-[3px]">
      <div className={styles}>
        <div className="text-xl font-bold text-white">{iconOrText}</div>
      </div>
    </div>
  );
}

export default IconCircleComponent;
