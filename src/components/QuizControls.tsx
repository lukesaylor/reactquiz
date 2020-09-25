import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { setQuizControls } from "./API";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

let numberOfQuestions: number = 5;
let Category: number;
let Difficulty: string;

console.log(numberOfQuestions);

const QuizControls = () => {
  const classes = useStyles();
  const [numberOfQuestions, setNumberOfQuestions] = React.useState("");

  const handleNumberOfQuestionChange = (event:any) => {
    setNumberOfQuestions(event.target.value);
  };

  return (
    <div>
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">
          Number of Questions
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={numberOfQuestions}
          onChange={handleNumberOfQuestionChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
    </div>
  );
};

export default QuizControls;
