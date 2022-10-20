import './App.css';
import { SpTheme } from '@swc-react-wrapper/theme';
import { SpButton } from '@swc-react-wrapper/button';
import { SpCard } from '@swc-react-wrapper/card';
import { SpRadio, SpRadioGroup } from '@swc-react-wrapper/radio';
import { SpActionGroup } from '@swc-react-wrapper/action-group';
import { SpActionButton } from '@swc-react-wrapper/action-button';
import { SpProgressCircle } from '@swc-react-wrapper/progress-circle';
import { SpIconEdit } from '@swc-react-wrapper/icons-workflow/IconEdit';

function App() {
  return (
    <SpTheme theme="spectrum" scale="medium" color="light">
      <div className="App">
        <SpButton click={() => alert('Hello')}>
          <SpIconEdit slot="icon"></SpIconEdit>
          I will be back
        </SpButton>
        <SpCard heading="Card Heading" subheading="JPG Photo">
          <img
            slot="cover-photo"
            src="https://picsum.photos/200/300"
            alt="demo"
          />
          <div slot="footer">Footer</div>
        </SpCard>
        <SpRadioGroup selected="first" name="example">
          <SpRadio value="first">Option 1</SpRadio>
          <SpRadio value="second">Option 2</SpRadio>
          <SpRadio value="third">Option 3</SpRadio>
          <SpRadio value="fourth">Option 4</SpRadio>
        </SpRadioGroup>
        <SpActionGroup selects="single" selected={["first"]}>
          <SpActionButton value="first">First</SpActionButton>
          <SpActionButton value="second">Second</SpActionButton>
        </SpActionGroup>
        <SpProgressCircle size='xxl' indeterminate />
      </div>
    </SpTheme>
  );
}

export default App;
