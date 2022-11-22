import "./App.css";

import { Theme } from "@swc-react/theme";
import { Button } from "@swc-react/button";
import { Card } from "@swc-react/card";
import { Radio, RadioGroup } from "@swc-react/radio";
import { ActionGroup } from "@swc-react/action-group";
import { ActionButton } from "@swc-react/action-button";
import { ProgressCircle } from "@swc-react/progress-circle";
import { IconEdit } from "@swc-react/icons-workflow/Edit";

function App() {
  return (
    <Theme theme="spectrum" scale="medium" color="light">
      <div className="App">
        <Button click={() => alert("Hello")}>
          <IconEdit slot="icon"></IconEdit>Be right back
        </Button>
        <Card heading="Card Heading" subheading="JPG Photo">
          <img
            slot="cover-photo"
            src="https://picsum.photos/200/300"
            alt="demo"
          />
          <div slot="footer">Footer</div>
        </Card>
        <RadioGroup selected="first" name="example">
          <Radio value="first">Option 1</Radio>
          <Radio value="second">Option 2</Radio>
          <Radio value="third">Option 3</Radio>
          <Radio value="fourth">Option 4</Radio>
        </RadioGroup>
        <ActionGroup selects="single" selected={["third"]}>
          <ActionButton value="first">First</ActionButton>
          <ActionButton value="second">Second</ActionButton>
          <ActionButton value="third">Third</ActionButton>
        </ActionGroup>
        <ProgressCircle size="xxl" indeterminate />
      </div>
    </Theme>
  );
}

export default App;
