const navbarItemsClasses =
  "hover:bg-slate-400 hover:text-white hover:cursor-pointer px-3 h-full align-middle py-3 text-navy";

function Navbar() {
  return (
    <div className="px-4 flex justify-between bg-white">
      <h1 className="text-3xl font-cursive py-2 hover:cursor-pointer">
        Francéī
      </h1>
      <div className="flex items-center">
        <h1 className={navbarItemsClasses}>Home</h1>
        <h1 className={navbarItemsClasses}>Menu</h1>
        <h1 className={navbarItemsClasses}>Contact Us</h1>
        <h1 className={navbarItemsClasses}>About</h1>
        <h1 className="px-3 h-full align-middle py-3 text-white bg-navy">
          Reviews
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
