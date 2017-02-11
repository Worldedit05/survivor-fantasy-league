import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Panel, PanelHeading, PanelBlock, Icon } from 're-bulma';

export default class PanelComponent extends React.Component {

  render() {

    const { usersScore } = this.props;

    let content = "";

    if (usersScore) {
      content = usersScore.users.map((user, index) =>
        <li key={index}>{user.firstName}</li>
      )
      content = <ui>{content}</ui>
    }

    return (
      <Panel>
        <PanelHeading style={this.props.style}><Icon className="icon" icon={this.props.iconType}/>
          {this.props.title} {this.props.icon}
        </PanelHeading>
        <PanelBlock>

        </PanelBlock>
      </Panel>
    )
  }
}
