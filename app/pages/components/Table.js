import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Table, Thead, Tr, Th, Td, Tfoot, Tbody } from 're-bulma';

export default class TableRender extends React.Component {

  render() {
    return (
      // This is an example table that I placed here for layout
      <Table className="style">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>InsTrument</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tfoot>
          <Tr>
           <Th className="sad">Name</Th>
           <Th>InsTrument</Th>
           <Th></Th>
           <Th></Th>
          </Tr>
        </Tfoot>
        <Tbody>
          <Tr>
            <Td>Misty Abbott</Td>
            <Td>Bass Guitar</Td>
            <Td class="is-icon">
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </Td>
            <Td class="is-icon">
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </Td>
          </Tr>
          <Tr>
            <Td>John SmiTh</Td>
            <Td>RhyThm Guitar</Td>
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
          </Tr>
          <Tr>
            <Td>Robert Mikels</Td>
            <Td>Lead Guitar</Td>
            <Td isIcon>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </Td>
            <Td isIcon>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    )
  }
}
