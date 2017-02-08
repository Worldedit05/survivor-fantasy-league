import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { fetchUsers } from '../../../actions/usersActions';


import { Table, Thead, Tr, Th, Td, Tfoot, Tbody } from 're-bulma';

@connect((store) => {
  return {
    userData: store.userData
  }
})

export default class TableRender extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    
    const { userData } = this.props;
    const textStyle = {textAlign: 'center'};

    const mappedUsers = userData.users.map((user, index) => <Tr key={user._id}>
      <Td><strong>{user.firstName} {user.lastName.charAt(0)}</strong></Td>
      <Td style={textStyle}>{user.draftPosition}</Td>
      <Td><i>{user.tribeName}</i></Td>
      <Td>{user.tribeMembers[0]}</Td>
      <Td>{user.tribeMembers[1]}</Td>
      <Td>{user.tribeMembers[2]}</Td>
      <Td>{user.tribeMembers[3]}</Td>
      <Td>{user.tribeMembers[4]}</Td>
      <Td>{user.tribeMembers[5]}</Td>
    </Tr>)
    return (
      // This is an example table that I placed here for layout
      <Table className="style" isStriped>
        <Thead>
          <Tr>
            <Th>Player Name</Th>
            <Th>Draft Position</Th>
            <Th>Tribe Name</Th>
            <Th>Tribe Pick #1</Th>
            <Th>Tribe Pick #2</Th>
            <Th>Tribe Pick #3</Th>
            <Th>Tribe Pick #4</Th>
            <Th>Tribe Pick #5</Th>
            <Th>Tribe Pick #6</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mappedUsers}
        </Tbody>
      </Table>
    )
  }
}
