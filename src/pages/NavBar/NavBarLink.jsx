import classNames from "classnames";
import useNavigation from "../../hooks/use-navigation";

function NavBarLink({ to, children, className, activeClassName }) {
  const { navigate, currentPath, scrollToTopOfPageNotSmooth } = useNavigation();

  const classes = classNames(
    `relative inline-block
  cursor-pointer
  text-2xl
  text-white
  transition-all
  duration-300
  before:absolute
  before:-bottom-0.5
  before:left-0
  before:h-0.5
  before:w-0
  before:rounded-full
  before:bg-gradient-to-r
  before:from-white
  before:to-white
  before:opacity-0
  before:transition-all
  before:duration-300
  before:content-['']
  hover:text-gray-300
  hover:before:w-full
  hover:before:opacity-100`,
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    event.preventDefault();

    navigate(to);

    currentPath !== to && scrollToTopOfPageNotSmooth();
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default NavBarLink;
