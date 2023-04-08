import  React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@material-ui/core";
import "./Dashboard.css";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
  };


  return (
    
      <div>
        <Typography
          style={{
            color: "white",
            textAlign: "left",
            padding: 40,
            fontWeight: "bolder",
          }}
          className="userName"
          variant="h4"
        >
          Hello, <br />
          {userName}
        </Typography>

        <div style={{paddingLeft: 30}}>
          <Button className="overview"
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
          <Button
          className="health"
          variant="text"
          color="primary"
          href="Health"
          style={{
            backgroundColor: "#333333",
            color: "white",
            borderRadius: 30,
            width: 200,
            marginLeft: 20,
          }}
        >
          Health Guides
        </Button>
        </div>

        <Grid container spacing={2}>
          <Grid style={{ padding: 20 }} item xs={12} md={12} lg={12}>
            <Button
              fullWidth
              component="a"
              href="DailyProgress"
              style={{
                padding: "20px",
              }}
            >
              <Card
                style={{
                  padding: "20px",
                  background: "#333333",
                  color: "white",
                  textAlign: "left",
                  width: "100%",
                  border: "2px solid lightgreen",
                  boxSizing: "border-box",
                }}
              >
                <CardContent>
                  <Typography variant="h5">Daily Progress</Typography>

                  <Typography
                    variant="subtitle2"
                    style={{ color: "lightgray", textAlign: "left" }}
                  >
                    Here you can see your daily tasks
                  </Typography>
                  <br />
                  <div className="break" />
                  <Typography
                    variant="h6"
                    style={{ alignItems: "left", paddingBottom: 10 }}
                  >
                    {`${progress}%`}
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ ...barStyle, backgroundColor: "gold" }}></div>
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
            paddingLeft: 30,
            fontWeight: "bolder",
          }}
          className="userName"
          variant="h4"
        >
          Categories
        </Typography>

        <Grid container spacing={3} style={{ padding: 20 }}>
        <Grid item xs={5} sm={5} md={8} lg={6}>
            <Button component="a" href="Journal" >
              <Card style={paperStyle}>
                <CardContent>
                  <AutoStoriesIcon
                    fontSize="large"
                    style={{ color: "royalblue" }}
                  />
                  <br />
                  <Typography
                    variant="subtitle2"
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
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: "bolder",
                        textAlign: "center",
                        width: 70,
                        marginLeft: 60,
                        backgroundColor: "royalblue",
                        borderRadius: 30,
                      }}
                    >
                      {`${progress}%`}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Button>
          </Grid>

          <Grid item xs={5} sm={5} md={8} lg={6}>
            <Button component="a" href="Messages">
              <Card style={paperStyle}>
                <CardContent>
                  <CircleNotificationsIcon
                    fontSize="large"
                    style={{ color: "orange" }}
                  />
                  <br />
                  <Typography
                    variant="subtitle2"
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
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: "bolder",
                        textAlign: "center",
                        width: 70,
                        marginLeft: 60,
                        backgroundColor: "orange",
                        borderRadius: 30,
                      }}
                    >
                      {`${progress}%`}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Button>
          </Grid>

          <Grid item xs={5} sm={5} md={8} lg={6}>
            <Button
              component="a"
              href="SavedRecipes"
              startdecorator={<SavedRecipes />}
            >
              <Card style={paperStyle}>
                <CardContent>
                  <RestaurantMenuIcon
                    fontSize="large"
                    style={{ color: "rgb(196, 19, 196)" }}
                  />
                  <br />
                  <Typography
                    variant="subtitle2"
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
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: "bolder",
                        textAlign: "center",
                        width: 70,
                        marginLeft: 60,
                        backgroundColor: "rgb(196, 19, 196)",
                        borderRadius: 30,
                      }}
                    >
                      {`${progress}%`}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Button>
          </Grid>

          <Grid item xs={5} sm={5} md={8} lg={6}>
            <Button component="a" href="Calendar">
              <Card style={paperStyle}>
                <CardContent>
                  <CalendarMonthIcon
                    fontSize="large"
                    style={{ color: "green" }}
                  />
                  <br />
                  <Typography
                    variant="subtitle2"
                    style={{ color: "lightgray", textAlign: "left" }}
                  >
                    {newTasks} New Tasks
                  </Typography>
                  <Typography variant="h5">My Calendar</Typography>
                  <div className="break" />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{ ...barStyle, backgroundColor: "green" }}
                    ></div>
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: "bolder",
                        textAlign: "center",
                        width: 70,
                        marginLeft: 60,
                        backgroundColor: "green",
                        borderRadius: 30,
                      }}
                    >
                      {`${progress}%`}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Button>
          </Grid>
        </Grid>
      </div>
    
  );
}

export default HomePage;
