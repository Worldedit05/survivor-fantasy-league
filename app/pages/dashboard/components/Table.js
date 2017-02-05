import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { fetchUsers } from '../../../actions/usersActions';


import { Table, Thead, Tr, Th, Td, Tfoot, Tbody } from 're-bulma';

@connect((store) => {
  return {
    users: store.users
  }
})

export default class TableRender extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    console.log(this.props);
    const { users } = this.props;

    const mappedUsers = users.users.map((user, index) => <Tr key={user._id}>
      <Td>{user.username}</Td>
      <Td>{user.email}</Td>
      <Td class="is-icon">
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
      </Td>
      <Td isIcon>
        <a href="#">
          <i className="fa fa-instagram"></i>
        </a>
      </Td>
    </Tr>)
    return (
      // This is an example table that I placed here for layout
      <Table className="style">
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tfoot>
          <Tr>
           <Th></Th>
           <Th></Th>
           <Th></Th>
           <Th></Th>
          </Tr>
        </Tfoot>
        <Tbody>
          {mappedUsers}
        </Tbody>
      </Table>
    )
  }
}
