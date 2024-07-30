import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

function Sidebar() {
  return (
    <aside className="h-screen py-4 w-32 bg-transparent ring flex flex-col items-center justify-center">
      <div className="h-2/6 border-b-4 border-white w-full flex justify-center">
        <div className="text-4xl outline rounded-full w-16 h-16 flex justify-center items-center border border-primary">
          RH
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between py-5 items-center">
        <div className="flex-col flex gap-12 justify-center mt-8">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </div>
        <div className="text-3xl">
          <MdKeyboardArrowUp />
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
