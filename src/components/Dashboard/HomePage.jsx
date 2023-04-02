import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@material-ui/core";
import "./Dashboard.css";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DailyProgress from "../Journal/DailyProgress";
import Journal from "../Journal/Journal";
import Messages from "./Messages";
import Calendar from "../Calendar/Calendar";
import SavedRecipes from "../Recipes/SavedRecipes";

function HomePage() {
  const userName = "Healthy Jack";
  const currEntries = "5";
  const notifications = "2";
  const savedMeals = "9";
  const newTasks = "5";
  const progress = 75; // assume progress is a percentage
  const barStyle = {
    width: `${progress}%`,
    height: 10,
    borderRadius: 10,
  };

  const paperStyle = {
    padding: "30px",
    background: "#333333",
    width: "600px",
    color: "white",
    textAlign: "left",
    // maxWidth: "50vw",
    // maxHeight: "80vh",
  };

  return (
    <div>
      <h1>Home</h1>
      <br />
      <div>
        <Typography
          style={{
            color: "white",
            textAlign: "left",
            paddingLeft: 40,
            paddingBottom: 40,
          }}
          className="userName"
          variant="h4"
        >
          Hello, {userName}
        </Typography>
        <div className="overview">
          <Button
            variant="contained"
            disabled
            color="primary"
            style={{
              backgroundColor: "royalblue",
              color: "white",
              borderRadius: 30,
              width: 200,
            }}
          >
            Overview
          </Button>
        </div>

        <Grid container spacing={2}>
          <Grid style={{ paddingLeft: 10 }} item xs={12} md={6} lg={6}>
            <Button
              component="a"
              href="DailyProgress"
              startdecorator={<DailyProgress />}
            >
              <Card
                style={{
                  padding: "30px",
                  background: "#333333",
                  width: "600px",
                  color: "white",
                  textAlign: "left",
                  maxHeight: "80vh",
                }}
              >
                <CardContent>
                  <Typography variant="h5">Daily Progress</Typography>

                  <Typography
                    variant="h9"
                    style={{ color: "lightgray", textAlign: "left" }}
                  >
                    Here you can see your daily tasks
                  </Typography>
                  <br />
                  <div className="break" />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ ...barStyle, backgroundColor: "gold" }}></div>
                    <Typography variant="h6" style={{ marginLeft: 10 }}>
                      {`${progress}%`}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Button>
          </Grid>
        </Grid>
        <Typography
          style={{
            color: "white",
            textAlign: "left",
            paddingLeft: 40,
            paddingBottom: 20,
            paddingTop: 20,
          }}
          className="userName"
          variant="h4"
        >
          Categories
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Button component="a" href="Journal" startdecorator={<Journal />}>
              <Card style={paperStyle}>
                <CardContent>
                  <AutoStoriesIcon
                    fontSize="large"
                    style={{ color: "royalblue" }}
                  /><br/>
                                    <Typography
                    variant="h9"
                    style={{ color: "lightgray", textAlign: "left" }}
                  >
                    {currEntries} Entries
                  </Typography>
                  <Typography variant="h5">Journal</Typography>
                  <div className="break" />{" "}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{ ...barStyle, backgroundColor: "royalblue" }}
                    ></div>
                    <Typography variant="h6" style={{ marginLeft: 10 }}>
                      {`${progress}%`}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Button component="a" href="Messages" startdecorator={<Messages />}>
              <Card style={paperStyle}>
                <CardContent>
                  <CircleNotificationsIcon
                    fontSize="large"
                    style={{ color: "orange" }}
                  /><br/>
                  <Typography
  variant="h9"
  style={{ color: "lightgray", textAlign: "left" }}
>
  {notifications} New
</Typography>
                  <Typography variant="h5">Notifications</Typography>
                  <div className="break" />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{ ...barStyle, backgroundColor: "orange" }}
                    ></div>
                    <Typography variant="h6" style={{ marginLeft: 10 }}>
                      {`${progress}%`}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Button component="a" href="SavedRecipes" startdecorator={<SavedRecipes />}>
              <Card style={paperStyle}>
                <CardContent>
                  <RestaurantMenuIcon
                    fontSize="large"
                    style={{ color: "rgb(196, 19, 196)" }}
                  /><br/>
                  <Typography
  variant="h9"
  style={{ color: "lightgray", textAlign: "left" }}
>
  {savedMeals} Saved Meals
</Typography>
                  <Typography variant="h5">My Favorite Recipes</Typography>
                  <div className="break" />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        ...barStyle,
                        backgroundColor: "rgb(196, 19, 196)",
                      }}
                    ></div>
                    <Typography variant="h6" style={{ marginLeft: 10 }}>
                      {`${progress}%`}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Button component="a" href="Calendar" startdecorator={<Calendar />}>
              <Card style={paperStyle}>
                <CardContent>
                  <CalendarMonthIcon
                    fontSize="large"
                    style={{ color: "lightgreen" }}
                  /><br/>
                  <Typography
  variant="h9"
  style={{ color: "lightgray", textAlign: "left" }}
>
  {newTasks} New Tasks
</Typography>
                  <Typography variant="h5">My Calendar</Typography>
                  <div className="break" />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{ ...barStyle, backgroundColor: "lightgreen" }}
                    ></div>
                    <Typography variant="h6" style={{ marginLeft: 10 }}>
                      {`${progress}%`}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HomePage;
