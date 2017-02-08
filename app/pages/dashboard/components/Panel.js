import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Panel, PanelHeading, PanelBlock, Icon } from 're-bulma';

export default class PanelComponent extends React.Component {

  render() {

    console.log(this.props);
    return (
      <Panel>
        <PanelHeading style={this.props.style}>
          {this.props.title} {this.props.icon}<Icon icon={this.props.iconType}/>
        </PanelHeading>
        <PanelBlock>
          Panel Content
        </PanelBlock>
      </Panel>
    )
  }
}
