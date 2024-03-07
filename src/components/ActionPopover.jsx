import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

export default function ActionPopper() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const popperRef = useRef(null);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  // eslint-disable-next-line no-unused-vars
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popperRef.current && !popperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box sx={{ width: 500 }}>
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper ref={popperRef} className=" w-24">
              <Typography
                sx={{ p: 1 }}
                className="hover:bg-neutral-100 cursor-pointer"
              >
                View
              </Typography>
              <Typography
                sx={{ p: 1 }}
                className="hover:bg-neutral-100 cursor-pointer"
              >
                Duplicate
              </Typography>
              <Typography
                sx={{ p: 1 }}
                className="hover:bg-neutral-100 cursor-pointer"
              >
                Delete
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <span className=" float-end">
        <MoreVertIcon onClick={handleClick("bottom-end")}></MoreVertIcon>
      </span>
    </Box>
  );
}
