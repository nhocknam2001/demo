import React from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      className=" pt-6 sidebar text-sm flex-col "
      sx={{
        width: "100%",
        maxWidth: 280,
        bgcolor: "background.paper",
        position: "fixed",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon className="-space-x-4" />
        </ListItemIcon>
        <ListItemText>Send</ListItemText>
        <ExpandMore />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText>Email</ListItemText>
        <ExpandMore />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <WidgetsIcon />
        </ListItemIcon>
        <ListItemText>Invoices</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          <Link to="/">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="List" />
            </ListItemButton>
          </Link>
          <Link to="/create">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Create" />
            </ListItemButton>
          </Link>
          <Link to="/details">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Details" />
            </ListItemButton>
          </Link>
          <Link to="/preview">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Preview" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <AddLocationIcon />
        </ListItemIcon>
        <ListItemText primary="Location"></ListItemText>
        <ExpandMore />
      </ListItemButton>
    </List>
  );
};

export default Sidebar;
