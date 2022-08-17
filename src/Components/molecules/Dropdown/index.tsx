import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import dropDownOptions from "../../../../Data/dropdownOptions";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";

interface DropDownProps extends SelectProps {
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  name: string;
}

const DropDown = (props: DropDownProps) => {
  const [categories, setCategories] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategories(event.target.value);
  };
  return (
    <FormControl style={props.style}>
      <InputLabel id="select">{props.name}</InputLabel>
      <Select
        data-testid="select"
        className={props.className}
        labelId="select"
        id="demo-simple-select"
        value={categories}
        label={props.name}
        onChange={handleChange}
      >
        {dropDownOptions.map((obj, idx) => {
          return (
            <MenuItem key={idx} value={obj.val}>
              {obj.val}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DropDown;
