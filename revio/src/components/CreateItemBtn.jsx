import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CreateItemBtn = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);

  const handleShowMenu = () => {
    setMenu(!menu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    if (menu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);

  return (
    <div className="relative" ref={menuRef}>
      <div
        className="border-2 border-stone-100 bg-slate-600 text-white w-fit p-1 px-4 rounded-3xl cursor-pointer h-10 font-heading shadow-sm"
        onClick={handleShowMenu}
      >
        <p className="pt-1">List product</p>
      </div>
      {menu && (
        <div className="absolute top-12 bg-white border rounded-lg shadow-md mt-2 w-48  m-2">
          <ul className="list-none p-2">
            <li className="p-2 hover:bg-gray-100">
              <Link to="/listproduct">List a Physical Copy</Link>
            </li>
            <li className="p-2 hover:bg-gray-100">
              <Link to="/listdigitalcopy">List a Digital Copy</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateItemBtn;
