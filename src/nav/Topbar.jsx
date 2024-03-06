import GoogleIcon from "@mui/icons-material/Google";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Topbar = () => {
  return (
    <div className="w-full border flex justify-between items-center px-5 h-16 sticky top-0 bg-white z-10">
      {/* Left Side */}
      <div className="flex justify-between items-center w-36">
        <GoogleIcon className=" cursor-pointer" />
        <span className="font-semibold flex flex-row">G-Dashboard</span>
      </div>
      {/* Right Side */}
      <div className=" flex items-center">
        <div className="flex justify-between items-center cursor-pointer mr-2 w-48">
          <img
            src="https://i.ebayimg.com/images/g/0~gAAMXQ9qpRTk04/s-l1200.jpg"
            alt=""
            className=" w-6 h-6 rounded-full"
          />
          <LightModeIcon className="flex" />
          <NotificationsNoneIcon className="flex" />
          <div>
            <img
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/405210365_1813846949053185_2206560152933021147_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Bb7F6UnRTJAAX9alU5h&_nc_ht=scontent.fhan17-1.fna&cb_e2o_trans=q&oh=00_AfBpmwBzh5u4JEN2gNyLs_0pRW-Lt-sVjtQ6FNFv5QZQTw&oe=65E44DC1"
              alt=""
              className=" w-11 h-11 rounded-xl my-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
