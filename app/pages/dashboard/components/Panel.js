import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Panel, PanelHeading, PanelBlock, Icon } from 're-bulma';

export default class PanelComponent extends React.Component {

  render() {

    const { usersScore } = this.props;
    let content = "Panel Content"

    if (usersScore) {
      content = usersScore.users.map((user, index) =>
        <li key={index}>{user.firstName}</li>
      )
    }

    return (
      <Panel>
        <PanelHeading style={this.props.style}>
          {this.props.title} {this.props.icon}<Icon icon={this.props.iconType}/>
        </PanelHeading>
        <PanelBlock>
          <ul>{content}</ul>
        </PanelBlock>
      </Panel>
    )
  }
}
