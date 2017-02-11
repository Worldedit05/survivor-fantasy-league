import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Panel, PanelHeading, PanelBlock, Icon, Table, Thead, Tr, Th, Td, Tbody } from 're-bulma';

export default class PanelComponent extends React.Component {

  render() {

    let mappedUsers = "";
    const textStyle = {textAlign: 'center'};

    if (this.props.usersScore.users.length > 0) {

      const { usersScore } = this.props;

      mappedUsers = usersScore.users.map((user, index) => <Tr key={user._id}>
        <Td><strong>{user.firstName} {user.lastName.charAt(0)}</strong></Td>
        <Td style={textStyle}>{user.score}</Td>
      </Tr>)
      
    }

    return (
      <Panel>
        <PanelHeading style={this.props.style}><Icon className="icon" icon={this.props.iconType}/>
          {this.props.title} {this.props.icon}
        </PanelHeading>
        <PanelBlock>
          <Table>
            <Thead>
              <Tr>
                <Th>Player</Th>
                <Th style={textStyle}>Score</Th>
              </Tr>
            </Thead>
            <Tbody>
              {mappedUsers}
            </Tbody>
          </Table>
        </PanelBlock>
      </Panel>
    )
  }
}
