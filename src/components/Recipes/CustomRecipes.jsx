import React, { useState } from "react";
import axios from "axios";
import { TextField, Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


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
  InputImageStyle: {
    color: "white",
  },
});

function CustomRecipes() {
  const classes = useStyles();
  const [fileData, setFileData] = useState("");
  const [image, setImage] = useState(null);
  const [steps, setSteps] = useState([{ step: "" }]);
  const [ingredients, setIngredients] = useState([
    { ingredient: "", measurement: "" },
  ]);

  const onImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setFileData(event.target.files[0]);
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

  const submitAction = (e) => {
    e.preventDefault();   
    const data = new FormData();
    data.append("photo", fileData);
    data.append("steps", JSON.stringify(steps));
    data.append("ingredients", JSON.stringify(ingredients));
    axios({
      method: "POST",
      url: "http://localhost:3001/customrecipes",
      data: data,
    }).then((res) => {       
        alert(res.data.message);
    });
    window.alert("Your recipe has been submitted!");
    window.location.reload();
  };

  return (
    <div>
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
      <Input
        type="file"
        onChange={onImageChange}
        className={classes.InputImageStyle}
        disableUnderline={true}
      />
      {/* Prevents the missing source icon from appearing */}
      <br></br>
      {image && <img src={image} />}

      {/* Ingredients with their measurements */}
      <h2>Ingredients</h2>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
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
            style={{ width: "30%", marginLeft: "10px", marginBottom: "15px" }}
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
          style={{ width: "91%", marginBottom: "15px" }}
        />
      ))}
      {/* Button to add more steps */}
      <br></br>
      <Button variant="contained" onClick={addStep}>
        Add Step
      </Button>

      {/* Button to submit the recipe */}
      <br></br>
      <Button
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
