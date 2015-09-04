import React from 'react'
import ReactDOM from 'react-dom'

import { Label, TextField } from '../src'

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Label</h2>
        <Label>Default Label</Label>
        <Label required={true}>Required Label</Label>
        <Label disabled={true}>Disabled Label</Label>

        <h2>TextField</h2>
        <TextField label="Simple" />
        <TextField label={
          <Label required={true}>Complex Label</Label>
        } />
        <TextField label="With Description" description="Lorem ipsum sit dolor amet." />
        <TextField label="Multiline" multiline={true} />
        <TextField label="Placeholder" placeholder={true} />
        <TextField label="Underlined" underlined={true} />
        <TextField label="Required" required={true} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'))
