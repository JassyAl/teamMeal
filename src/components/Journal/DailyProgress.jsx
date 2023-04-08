import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Stack } from "@mui/material";
import "./Journal.css";
import { 
  ArrowForwardIos as ArrowForwardIosIcon, 
  AutoStories as AutoStoriesIcon, 
  Notifications as NotificationsIcon, 
  Celebration as CelebrationIcon, 
  Notes as NotesIcon 
} from "@mui/icons-material";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#333333",
    borderRadius: 20,
    color: "white",
    borderColor: "green",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    padding: 20,
    fontSize: 20,
  },
  buttonIcon: {
    color: "white",
  },
}));

function RecommendedSites(props) {
  const sites = props.sites;
  const randomIndex = Math.floor(Math.random() * sites.length); // choose a random index from the sites array
  const randomSite = sites[randomIndex]; // get the site object at the random index

  return (
    <div>
      <a href={randomSite.url} style={{ textDecoration: "none", textAlign: "center", color: "white"}}>Read Guide From {randomSite.name}</a>
    </div>
  );
}


function DailyProgress() {
  const classes = useStyles();
  // healthy sites array
  const recommendedSites = [
    { name: 'ChooseMyPlate.gov', url: 'https://www.choosemyplate.gov/' },
    { name: 'Mayo Clinic', url: 'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating' },
    { name: 'Harvard School of Public Health', url: 'https://www.hsph.harvard.edu/nutritionsource/' },
    { name: 'Academy of Nutrition and Dietetics', url: 'https://www.eatright.org/' },
    { name: 'Nutrition.gov', url: 'https://www.nutrition.gov/' },
    { name: 'Center for Science in the Public Interest', url: 'https://cspinet.org/' },
    { name: "Today's Dietitian", url: 'https://www.todaysdietitian.com/' },
    { name: 'Food Politics', url: 'https://www.foodpolitics.com/' },
    { name: 'American Society for Nutrition', url: 'https://nutrition.org/' },
    { name: 'EatFresh.org', url: 'https://www.eatfresh.org/' },
    { name: 'NutritionFacts.org', url: 'https://nutritionfacts.org/' },
    { name: 'MyFitnessPal Blog', url: 'https://blog.myfitnesspal.com/' },
    { name: 'EatingWell', url: 'https://www.eatingwell.com/' },
    { name: 'Vegetarian Resource Group', url: 'https://www.vrg.org/' },
    { name: 'Whole Foods Market Blog', url: 'https://www.wholefoodsmarket.com/blog' },
    { name: 'Clean Eating Magazine', url: 'https://www.cleaneatingmag.com/' },
    { name: 'The Nutrition Source', url: 'https://www.hsph.harvard.edu/nutritionsource/' },
    { name: 'Cooking Light', url: 'https://www.cookinglight.com/' },
    { name: 'The World Health Organization', url: 'https://www.who.int/' },
    { name: 'The Institute for Functional Medicine', url: 'https://www.ifm.org/' },
    { name: 'Oldways', url: 'https://oldwayspt.org/' },
    { name: 'Healthy Food Guide', url: 'https://www.healthyfood.com/' },
    { name: 'The Nutrition Society', url: 'https://www.nutritionsociety.org/' },
    { name: 'Eat This, Not That!', url: 'https://www.eatthis.com/' },
    { name: 'Nutrition Stripped', url: 'https://nutritionstripped.com/' },
    { name: 'HealthyChildren.org', url: 'https://www.healthychildren.org/' },
    { name: 'The Journal of Nutrition', url: 'https://academic.oup.com/jn' }
  ];
  
  return (
    <div>
      <div>
        <h1>Daily Progress</h1>
      </div>
      <div className={classes.root}>
        <Stack className="stack" spacing={3}>
          <Grid item>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              <AutoStoriesIcon
                fontSize="large"
                style={{ color: "skyblue", paddingLeft: 10 }}
              />
              <RecommendedSites sites={recommendedSites} />
              <ArrowForwardIosIcon style={{ paddingRight: 20 }} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.button}
              href="/calendar"
            >
              <NotificationsIcon
                fontSize="large"
                style={{ color: "lightgreen", paddingLeft: 10 }}
              />
              Create New Schedule
              <ArrowForwardIosIcon style={{ paddingRight: 20 }} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.button}
              href="/messages"
            >
              <CelebrationIcon
                fontSize="large"
                style={{ color: "orange", paddingLeft: 10 }}
              />
              Share your progress
              <ArrowForwardIosIcon style={{ paddingRight: 20 }} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.button}
              href="/journal"
            >
              <NotesIcon
                fontSize="large"
                style={{ color: "violet", paddingLeft: 10 }}
              />
              Update Journal
              <ArrowForwardIosIcon style={{ paddingRight: 20 }} />
            </Button>
          </Grid>
          {/* </Grid> */}
        </Stack>
      </div>
    </div>
  );
}

export default DailyProgress;
