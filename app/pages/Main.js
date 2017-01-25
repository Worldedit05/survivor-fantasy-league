import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class Main extends React.Component {

  render() {
    return (
      <div>
        Hello world!
      </div>
    )
  }
}
