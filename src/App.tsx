import "./App.css";

import React from "react";
import { Theme } from "@swc-react/theme";
import { Button } from "@swc-react/button";
import { Card } from "@swc-react/card";
import { Radio, RadioGroup } from "@swc-react/radio";
import { ActionGroup, ActionGroupType } from "@swc-react/action-group";
import { ActionButton, ActionButtonType } from "@swc-react/action-button";
import { ProgressCircle } from "@swc-react/progress-circle";
import { IconEdit } from "@swc-react/icons-workflow/Edit";

import "@spectrum-web-components/theme/theme-light.js";
import "@spectrum-web-components/theme/scale-medium.js";

function App() {
  const handleChange = (e: Event) => {
    console.log((e.target as ActionGroupType).selected);
  };
  const handleClick = (e: React.MouseEvent<ActionButtonType>) => {
    console.log(e.currentTarget.selected);
  };
  return (
    <Theme theme="spectrum" scale="medium" color="light">
      <div className="App">
        <RadioGroup selected="first" name="example">
          <Radio value="first">Option 1</Radio>
          <Radio value="second">Option 2</Radio>
          <Radio value="third">Option 3</Radio>
          <Radio value="fourth">Option 4</Radio>
        </RadioGroup>
        {/* <ActionGroup selects="single" selected={["third"]} change={handleChange}>
          <ActionButton value="first">First</ActionButton>
          <ActionButton value="second">Second</ActionButton>
          <ActionButton value="third">Third</ActionButton>
        </ActionGroup> */}
        {/* <ProgressCircle size="xxl" indeterminate />
        <ActionButton toggles change={handleChange} onClick={handleClick}>Toggle</ActionButton> */}
      </div>
    </Theme>
  );
}

export default App;
