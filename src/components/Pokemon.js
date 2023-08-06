import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Grid } from "@mui/material";

const MediaCard = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    viewDetails();
  }, []);

  const viewDetails = async () => {
    try {
      const response = await axios.get("http://localhost:4000/pokemons", {
        withCredentials: true,
      });
      setDetail(response.data.pokemons);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      style={{ padding: "40px" }}
    >
      {detail.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item._id}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
              sx={{
                flex: "1 1 auto", // Use flex to maintain aspect ratio
                objectFit: "cover",
              }}
              image={item.image}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body1">
                <strong>HP:</strong> {item.hp}
              </Typography>
              <Typography variant="body1">
                <strong>Attacks:</strong> {item.attacks.join(", ")}
              </Typography>
              <Typography variant="body1">
                <strong>Abilities:</strong> {item.abilities.join(", ")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MediaCard;



