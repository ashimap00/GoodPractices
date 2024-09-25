import { useState } from "react";
import { Box, Typography, useTheme, Card, CardContent, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText } from "@mui/material";
import { Header } from "../../components";
import { mockDataTrainors } from "../../data/mockTrainorData";
import {
  LanguageOutlined,
  LocationOnOutlined,
  PersonOutlined,
  EventOutlined,
} from "@mui/icons-material";
import { tokens } from "../../theme";
import GoogleTranslate from "../../components/GoogleTranslate";

const Trainors = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Initialize the list with some trainors
  const initialTrainors = mockDataTrainors.slice(0, 5);
  const [trainorList, setTrainorList] = useState(initialTrainors);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTrainor = (trainor) => {
    setTrainorList((prevList) => [...prevList, trainor]);
    handleClose();
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TRAINORS" subtitle="Managing the Trainor Data" />
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add Trainor
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select a Trainor</DialogTitle>
        <DialogContent>
          <List>
            {mockDataTrainors.map((trainor) => (
              <ListItem button key={trainor.id} onClick={() => handleAddTrainor(trainor)}>
                <ListItemText primary={trainor.name} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Box mt="40px">
        <Grid container spacing={2}>
          {trainorList.map((trainor) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={trainor.id}>
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
                    <Typography variant="h6">{trainor.name}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <EventOutlined />
                    <Typography>{trainor.age}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <LanguageOutlined />
                    <Typography>{trainor.language}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <LocationOnOutlined />
                    <Typography>{trainor.locality}</Typography>
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

export default Trainors;
