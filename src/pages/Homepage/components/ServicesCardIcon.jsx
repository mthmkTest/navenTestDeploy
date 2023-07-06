import {
  HiOutlineChartBar,
  HiChat,
  HiOutlineDesktopComputer,
} from "react-icons/hi";

function ServicesCardIcon({ icon }) {
  let currIcon;

  switch (icon) {
    case 1:
      currIcon = <HiOutlineChartBar className="font-light" />;
      break;
    case 2:
      currIcon = <HiChat />;
      break;
    case 3:
      currIcon = <HiOutlineDesktopComputer />;
      break;
    default:
      currIcon = <div>Icon</div>;
  }

  return currIcon;
}

export default ServicesCardIcon;
