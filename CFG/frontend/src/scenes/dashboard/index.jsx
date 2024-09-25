import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Header,
  StatBox,
  LineChart,
  ProgressCircle,
  BarChart,
  GeographyChart,
} from "../../components";
import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isXlDevices = useMediaQuery("(min-width: 1260px)");
  const isMdDevices = useMediaQuery("(min-width: 724px)");
  const isXsDevices = useMediaQuery("(max-width: 436px)");

  function createData(sl__no, state_ut, shgs_formed, households_mobilized) {
    return { sl__no, state_ut, shgs_formed, households_mobilized };
  }

  const rows = [
    createData("1", "Andhra Pradesh", 853122, 8929363),
    createData("2", "Assam", 332315, 3707450),
    createData("3", "Bihar", 1054925, 12200889),
    createData("4", "Chhatisgarh", 253030, 2727056),
    createData("5", "Gujarat", 270672, 2694386),
    createData("6", "Jharkhand", 277850, 3446912),
    createData("7", "Karnataka", 252285, 2989060),
    createData("8", "Kerala", 254191, 3644669),
    createData("9", "Madhya Pradesh", 427281, 4797967),
    createData("10", "Maharashtra", 597697, 5950619),
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        {!isXsDevices && (
          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: colors.blueAccent[700],
                color: "#fcfcfc",
                fontSize: isMdDevices ? "14px" : "10px",
                fontWeight: "bold",
                p: "10px 20px",
                mt: "18px",
                transition: ".3s ease",
                ":hover": {
                  bgcolor: colors.blueAccent[800],
                },
              }}
              startIcon={<DownloadOutlined />}
            >
              DOWNLOAD REPORTS
            </Button>
          </Box>
        )}
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns={
          isXlDevices
            ? "repeat(12, 1fr)"
            : isMdDevices
            ? "repeat(6, 1fr)"
            : "repeat(3, 1fr)"
        }
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Statistic Items */}
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="11,361"
            subtitle="Beneficieries"
            progress="0.75"
            increase="+14%"
            icon={
              <Email sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Trainers"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSale sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="Trainees"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAdd sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            icon={
              <Traffic sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Box>

        {/* Table Component */}
        <Box
          gridColumn={isXlDevices ? "span 8" : "span 6"}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="20px"
        >
          <TableContainer component={Paper} sx={{ height: "100%" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: colors.greenAccent[600], fontWeight: 'bold' }}>State/UT</TableCell>
                  <TableCell align="right" sx={{ color: colors.greenAccent[600], fontWeight: 'bold' }}>SHGs Formed</TableCell>
                  <TableCell align="right" sx={{ color: colors.greenAccent[600], fontWeight: 'bold' }}>Households Mobilized</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.sl__no}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.state_ut}
                    </TableCell>
                    <TableCell align="right">{row.shgs_formed}</TableCell>
                    <TableCell align="right">{row.households_mobilized}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
