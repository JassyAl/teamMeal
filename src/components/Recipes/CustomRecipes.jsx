import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import "./recipes.css";

const useStyles = makeStyles({
  TextFieldStyle: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
  },
});

function CustomRecipes() {
  const classes = useStyles();
  const [steps, setSteps] = useState([{ step: "" }]);
  const [ingredients, setIngredients] = useState([
    { ingredient: "", measurement: "" },
  ]);

  const [image, setImage] = useState(null);
  const displayImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { ingredient: "", measurement: "" }]);
  };

  const handleIngredientChange = (event, index, field) => {
    const createIngredients = [...ingredients];
    createIngredients[index][field] = event.target.value;
    setIngredients(createIngredients);
  };

  const addStep = () => {
    setSteps([...steps, { step: "" }]);
  };

  const handleStepChange = (event, index) => {
    const createSteps = [...steps];
    createSteps[index].step = event.target.value;
    setSteps(createSteps);
  };

  const submitAction = () => {
    uploadFile();
    window.alert("Your recipe has been submitted!");
    window.location.reload();
  };

  const [fileData, setFileData] = useState("");

  const getFile = (e) => {
    setFileData(e.target.files[0]);
  };

  const uploadFile = (e) => {
    if (e) {
      e.preventDefault();
    }
    const data = new FormData();
    data.append("file", fileData);
    axios({
      method: "POST",
      url: "http://localhost:3000/upload",
      data: data,
    }).then((res) => {
      alert(res.data.message);
    });
  };

  return (
    <div id="customrecipe-page-container">
      <h1>Add Custom Recipe</h1>
      {/* Recipe Name */}
      <TextField
        label="Recipe Name"
        variant="outlined"
        className={classes.TextFieldStyle}
        style={{ width: "80%" }}
      />

      {/* Import Photo */}
      <h2>Photo</h2>
      <Button
        variant="contained"
        onClick={() =>
          document.getElementById("customrecipe-image-upload").click()
        }
      >
        Upload Image
      </Button>
      <input
        id="customrecipe-image-upload"
        type="file"
        name="file"
        onChange={(event) => {
          getFile(event);
          displayImage(event);
        }}
        style={{ display: "none" }}
      />
      <br></br>
      {image && (
        <img
          alt=""
          src={image}
          style={{ width: "400px", height: "400px", objectFit: "contain" }}
        />
      )}

      {/* Ingredients with their measurements */}
      <h2>Ingredients</h2>
      {ingredients.map((ingredient, index) => (
        <div id="customrecipe-ingredient-container" key={index}>
          <TextField
            label="Ingredient"
            variant="outlined"
            className={classes.TextFieldStyle}
            onChange={(event) =>
              handleIngredientChange(event, index, "ingredient")
            }
            style={{ width: "60%" }}
          />
          <TextField
            label="Measurement"
            variant="outlined"
            className={classes.TextFieldStyle}
            onChange={(event) =>
              handleIngredientChange(event, index, "measurement")
            }
            style={{
              width: "30%",
              marginLeft: "10px",
              marginBottom: "15px",
            }}
          />
        </div>
      ))}
      {/* Button to add more ingredients */}
      <Button variant="contained" onClick={addIngredient}>
        Add Ingredient
      </Button>

      {/* Steps/Instructions for recipe */}
      <h2>Steps</h2>
      {steps.map((step, index) => (
        <TextField
          key={index}
          label={`Step ${index + 1}`}
          variant="outlined"
          multiline={true}
          className={classes.TextFieldStyle}
          onChange={(event) => handleStepChange(event, index)}
          style={{ width: "85%", marginBottom: "15px" }}
        />
      ))}
      {/* Button to add more steps */}
      <br></br>
      <Button
        variant="contained"
        onClick={addStep}
        style={{
          marginBottom: "30px",
        }}
      >
        Add Step
      </Button>

      {/* Other Notes */}
      <TextField
        label="Other Notes"
        variant="outlined"
        className={classes.TextFieldStyle}
        style={{ width: "90%" }}
        multiline={true}
      />

      {/* Button to submit the recipe */}
      <br></br>
      <Button
        id="customrecipe-submit-button"
        variant="contained"
        onClick={submitAction}
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          backgroundColor: "lightgreen",
          fontSize: "16px",
          width: "40%",
        }}
      >
        Submit Recipe
      </Button>
    </div>
  );
}

export default CustomRecipes;
