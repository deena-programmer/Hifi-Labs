import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}>
        <Box sx={{
            my: 3,"& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <p>Follow Me</p>
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </Box>
        <Typography variant="h5" sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}>
        <div class="footerContain1">
            <div class="footerPlace">
                <li>Any Hour </li>
                <li>Any Place</li>
            </div>
            <h1>Collection centres all over Chennai</h1>
            <div class="footer_care">
                <p><img className="img-fluid" src=""  alt=""/> 9042399046</p>
                <p><img className="img-fluid" src="" alt=""/> hifilabs@gmail.com</p>
            </div>
        </div>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;