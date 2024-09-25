import React from "react";
import { Box, Button } from "@mui/material";
import { Header } from "../../components";
import { tokens } from "../../theme";
import GoogleTranslate from "../../components/GoogleTranslate";
import { useTheme } from '@mui/material/styles';  // Ensure useTheme is imported correctly

const AdminUpload = () => {
  const theme = useTheme();  // Correct useTheme usage
  const colors = tokens(theme.palette.mode);

  // File upload handlers
  const handleBaselineUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the baseline file upload
      console.log("Baseline CSV uploaded:", file);
    }
  };

  const handleEndlineUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the endline file upload
      console.log("Endline CSV uploaded:", file);
    }
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ADMIN UPLOAD" subtitle="Upload Baseline and Endline Data" />
      </Box>
      <GoogleTranslate />
      <Box mt="40px" display="flex" justifyContent="center" alignItems="center" gap={2}>
        <Button
          variant="contained"
          component="label"
          sx={{ backgroundColor: colors.primary[600], '&:hover': { backgroundColor: colors.primary[700] }, padding: '10px 20px', fontSize: '16px', borderRadius: '8px' }}
        >
          Upload Baseline CSV
          <input
            type="file"
            accept=".csv"
            hidden
            onChange={handleBaselineUpload}
          />
        </Button>
        <Button
          variant="contained"
          component="label"
          sx={{ backgroundColor: colors.primary[600], '&:hover': { backgroundColor: colors.primary[700] }, padding: '10px 20px', fontSize: '16px', borderRadius: '8px' }}
        >
          Upload Endline CSV
          <input
            type="file"
            accept=".csv"
            hidden
            onChange={handleEndlineUpload}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default AdminUpload;
