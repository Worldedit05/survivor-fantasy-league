import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { fetchUsers } from '../../../actions/usersActions';
import { fetchSurvivors } from '../../../actions/survivorActions';

import { Table, Thead, Tr, Th, Td, Tfoot, Tbody } from 're-bulma';

@connect((store) => {
  return {
    survivorData: store.survivorData
  }
})

export default class TableRender extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchSurvivors());
  }

  render() {

    const { survivorData } = this.props;
    const textStyle = {textAlign: 'center'};

    const mappedUsers = survivorData.survivors.map((survivor, index) => <Tr key={survivor._id}>
      <Td><strong>{survivor.firstName} {survivor.lastName}</strong></Td>
      <Td style={textStyle}>{survivor.weeklyPoints[0]}</Td>
      <Td style={textStyle}>{survivor.weeklyPoints[1]}</Td>
      <Td style={textStyle}>{survivor.weeklyPoints[2]}</Td>
      <Td style={textStyle}>{survivor.weeklyPoints[3]}</Td>
      <Td style={textStyle}>{survivor.weeklyPoints[4]}</Td>
      <Td style={textStyle}>{survivor.weeklyPoints[5]}</Td>
      <Td style={textStyle}>{survivor.weeklyPoints.reduce((a,b) => a + b, 0)}</Td>
    </Tr>)

    return (
      // This is an example table that I placed here for layout
      <Table className="style" isStriped isBordered>
        <Thead>
          <Tr style={textStyle}>
            <Th>Survivor</Th>
            <Th>Week 1</Th>
            <Th>Week 2</Th>
            <Th>Week 3</Th>
            <Th>Week 4</Th>
            <Th>Week 5</Th>
            <Th>Week 6</Th>
            <Th>Total Points</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mappedUsers}
        </Tbody>
      </Table>
    )
  }
}
