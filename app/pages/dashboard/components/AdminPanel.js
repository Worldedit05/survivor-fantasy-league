import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Columns, Column, Container, Hero, HeroBody } from 're-bulma';

import { fetchUsers } from '../../../actions/usersActions';

import TableRender from './Table.js';
import PanelComponent from './Panel.js';

@connect((store) => {
  return {
    users: store.users
  }
})

export default class AdminPanel extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  render () {
    console.log(this.props);
    return (
        <Container>
          <Columns isMultiline>
            <Column size="is12">
              <Container hasTextCentered>
                <Hero size="isSmall" className="style">
                  <HeroBody>
                    <h1 className="title">
                      Survivor Fantasy League
                    </h1>
                  </HeroBody>
                </Hero>
              </Container>
            </Column>
            <section className="field">
              <Column size="is12">
                <TableRender props={this.props}></TableRender>
              </Column>
              <Columns size="is12">
                <Column size="isOneThirdDesktop">
                  <PanelComponent></PanelComponent>
                </Column>
                <Column size="isOneThirdDesktop">
                  <PanelComponent></PanelComponent>
                </Column>
                <Column size="isOneThirdDesktop">
                  <PanelComponent></PanelComponent>
                </Column>
              </Columns>
            </section>
          </Columns>
        </Container>

    )
  }
}
