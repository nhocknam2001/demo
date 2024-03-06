import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { blue } from "@mui/material/colors";

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: "#f0f0f0" }}>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell
              align="left"
              padding="none"
              style={{ paddingLeft: 80, paddingRight: 80 }}
            >
              Qty
            </TableCell>
            <TableCell
              align="left"
              padding="none"
              style={{ paddingLeft: 80, paddingRight: 80 }}
            >
              Subtotal
            </TableCell>
            <TableCell align="left">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <h2>Watch with Leather Strap</h2>{" "}
              <p className=" text-gray-500">$160.00</p>
            </TableCell>
            <TableCell
              align="left"
              padding="none"
              style={{ paddingLeft: 80, paddingRight: 80 }}
            >
              1
            </TableCell>
            <TableCell
              align="left"
              padding="none"
              style={{ paddingLeft: 80, paddingRight: 80 }}
            >
              $160.00
            </TableCell>
            <TableCell align="left">$192.50</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell
              align="left"
              padding="none"
              style={{ paddingLeft: 80, paddingRight: 80 }}
            ></TableCell>
            <TableCell
              align="left"
              padding="none"
              style={{ paddingLeft: 80, paddingRight: 80 }}
            ></TableCell>
            <TableCell align="left">
              <div className=" text-sm font-semibold text-gray-500 flex-row flex space-x-2">
                <span>Tax</span>
                <p className=" text-black">$32.50</p>
              </div>{" "}
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell
              align="left"
              padding="none"
              style={{ paddingLeft: 80, paddingRight: 80 }}
            ></TableCell>
            <TableCell
              align="left"
              padding="none"
              style={{ paddingLeft: 80, paddingRight: 80 }}
            ></TableCell>
            <TableCell align="left">
              <div className="text-base font-semibold text-gray-500 flex-row flex space-x-2">
                <span>Total</span>
                <p className=" text-black">$192.50</p>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
