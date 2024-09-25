import { useState } from "react";
import { Box, Typography, useTheme, Card, CardContent, Grid } from "@mui/material";
import { Header } from "../../components";
import { mockTraineeData } from "../../data/mockTraineeData";
import {
  LanguageOutlined,
  WorkOutline,
  PersonOutlined,
  EventOutlined
} from "@mui/icons-material";
import { tokens } from "../../theme";
import GoogleTranslate from "../../components/GoogleTranslate";

const TraineesAdmin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Initialize the list with some trainees
  const initialTrainees = mockTraineeData.slice(0, 5);
  const [traineeList, setTraineeList] = useState(initialTrainees);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TRAINEES" subtitle="List of All the TraineesAdmin" />
      </Box>
      <GoogleTranslate /> {/* Add this line */}
      <Box mt="40px">
        <Grid container spacing={2}>
          {traineeList.map((trainee) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={trainee.id}>
              <Card
                sx={{
                  backgroundColor: colors.primary[400],
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" gap={1} mb={2}>
                    <PersonOutlined />
                    <Typography variant="h6">{trainee.name}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <EventOutlined />
                    <Typography>{trainee.age}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <WorkOutline />
                    <Typography>{trainee.occupation}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <Typography>₹</Typography>
                    <Typography>{trainee.income}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <LanguageOutlined />
                    <Typography>{trainee.gender}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TraineesAdmin;
