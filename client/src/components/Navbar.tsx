import useWindowDimensions from "../hooks/useWindowsDimensions";
import { MdMenu } from "react-icons/md";

const navbarItemsStyles =
  "hover:bg-slate-400 hover:text-white hover:cursor-pointer px-3 h-full align-middle py-3 text-navy";

function Navbar() {
  const { width } = useWindowDimensions();

  return (
    <div className="px-4 flex justify-between items-center bg-white">
      <h1 className="text-3xl font-cursive hover:cursor-pointer py-1">
        Francéī
      </h1>

      {width > 650 ? (
        <>
          <div className="flex items-center mx-auto">
            <h1 className={navbarItemsStyles}>Home</h1>
            <h1 className={navbarItemsStyles}>Menu</h1>
            <h1 className={navbarItemsStyles}>Contact Us</h1>
            <h1 className={navbarItemsStyles}>About</h1>
            <h1 className="px-3 h-full align-middle hover:cursor-pointer py-3 text-white bg-navy">
              Reviews
            </h1>
          </div>
        </>
      ) : (
        <MdMenu size={30} className="hover:cursor-pointer" />
      )}
    </div>
  );
}

export default Navbar;
