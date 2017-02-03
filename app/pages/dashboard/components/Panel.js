import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Panel, PanelHeading, PanelBlock } from 're-bulma';

export default class PanelComponent extends React.Component {

  render() {
    return (
      <Panel>
        <PanelHeading>
          Panel Heading
        </PanelHeading>
        <PanelBlock>
          Panel Content
        </PanelBlock>
      </Panel>
    )
  }
}
