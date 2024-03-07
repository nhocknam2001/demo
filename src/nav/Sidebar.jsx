import React from "react";
import { Link, useLocation } from "react-router-dom";
import WidgetsIcon from "@mui/icons-material/Widgets";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import "../App.css";

const Sidebar = () => {
  const location = useLocation();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div
      className=" pt-6 text-sm flex-col font-medium text-neutral-700 fixed"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <div className="flex items-center justify-between w-full ">
          <div className="items-center flex -space-x-2">
            <ListItemIcon className=" pl-2">
              <SendIcon />
            </ListItemIcon>
            <span>Send</span>
          </div>
          <ExpandMore />
        </div>
      </ListItemButton>
      <ListItemButton>
        <div className="flex items-center justify-between w-full">
          <div className="items-center flex -space-x-2">
            <ListItemIcon className=" pl-2">
              <DraftsIcon />
            </ListItemIcon>
            <span>Email</span>
          </div>
          <ExpandMore />
        </div>
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <div className="flex items-center justify-between w-full">
          <div className="items-center flex -space-x-2">
            <ListItemIcon className=" pl-2">
              <WidgetsIcon />
            </ListItemIcon>
            <span>Invoices</span>
          </div>
          {open ? <ExpandLess /> : <ExpandMore />}
        </div>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" className=" text-neutral-500">
          <Link to="/">
            <ListItemButton sx={{ pl: 8 }}>
              <span className={isActive("/") ? "text-green-500" : ""}>
                List
              </span>
            </ListItemButton>
          </Link>
          <Link to="/create">
            <ListItemButton sx={{ pl: 8 }}>
              <span className={isActive("/create") ? "text-green-500" : ""}>
                Create
              </span>
            </ListItemButton>
          </Link>
          <Link to="/details">
            <ListItemButton sx={{ pl: 8 }}>
              <span className={isActive("/details") ? "text-green-500" : ""}>
                Details
              </span>
            </ListItemButton>
          </Link>
          <Link to="/preview">
            <ListItemButton sx={{ pl: 8 }}>
              <span className={isActive("/preview") ? "text-green-500" : ""}>
                Preview
              </span>
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
      <ListItemButton>
        <div
          className={`flex items-center justify-between w-full ${
            isActive("/location") ? "text-green-500" : ""
          }`}
        >
          <div className="items-center flex -space-x-2">
            <ListItemIcon className=" pl-2">
              <AddLocationIcon />
            </ListItemIcon>
            <span>Location</span>
          </div>
          <ExpandMore />
        </div>
      </ListItemButton>
    </div>
  );
};

export default Sidebar;
