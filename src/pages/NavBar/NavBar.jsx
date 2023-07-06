import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import useNavigation from "../../hooks/use-navigation";
import useMediaQuery from "../../hooks/useMediaQuery";

import { links } from "../../data/navLinksData";

import NavBarLink from "./NavBarLink";

import Logo from "../../assets/imgs/logoImgs/Logo.png";

function NavBar({ isTopOfPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");
  const { scrollToTopOfPage } = useNavigation();

  const navBarBackground = isTopOfPage
    ? "bg-mainColor"
    : "bg-gradient-to-b from-black via-gray-900 via-gray-800 via-gray-700 via-85%";

  const renderIcon = isMenuToggled ? <HiX /> : <HiMenu />;

  const renderedLinks = links.map((link) => {
    return (
      <NavBarLink
        key={link.label}
        to={link.path}
        activeClassName="border-b border-borderLighterMainText text-gray-400"
      >
        {link.label}
      </NavBarLink>
    );
  });

  return (
    <nav
      className={`${navBarBackground} fixed top-0 z-40 w-full py-6 shadow-xl`}
    >
      <div className="mx-auto flex w-5/6 items-center lg:justify-start">
        <h4 className="flex items-center font-lobster text-3xl text-white">
          <button onClick={scrollToTopOfPage}>
            <img src={Logo} alt="Logo" className="w-50 h-12 -translate-y-2" />
          </button>
          <span className="mx-4 inline-block font-cinzel text-lightGray">
            |
          </span>
        </h4>
        {isAboveLargeScreens ? (
          <div className="flex gap-8 font-cinzel text-sm">{renderedLinks}</div>
        ) : (
          <>
            <button
              className="fixed right-6 top-6 z-20 justify-self-end rounded-full bg-gray-300 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {renderIcon}
            </button>

            {!isAboveLargeScreens && isMenuToggled && (
              <div className="from-1% fixed bottom-0 right-0 h-full w-[250px] justify-end bg-gradient-to-b from-black via-gray-500 py-6">
                <div className="ml-[25%] mt-[20%] flex flex-col items-start gap-10 font-cinzel text-sm">
                  {renderedLinks}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
