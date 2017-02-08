import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Columns, Column, Container, Hero, HeroBody } from 're-bulma';

import TableRender from './Table.js';
import PanelComponent from './Panel.js';

@connect((store) => {
  return {
    userData: store.userData
  }
})

export default class AdminPanel extends React.Component {

  render () {
    const twitterPanelStyle = {backgroundColor: '#42afe3', color: '#fff'};
    const weatherPanelStyle = {backgroundColor: '#273469', color: '#fff'};
    const leaderBoardPanelStyle = {backgroundColor: '#1E2749', color: '#fff'};
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
                <TableRender></TableRender>
              </Column>
              <Columns size="is12">
                <Column size="isOneThirdDesktop">
                  <PanelComponent usersScore={this.props.userData} title="Leaderboard" iconType="fa fa-desktop" style={leaderBoardPanelStyle}></PanelComponent>
                </Column>
                <Column size="isOneThirdDesktop">
                  <PanelComponent title="Weather in Location" iconType="fa fa-cloud" style={weatherPanelStyle}></PanelComponent>
                </Column>
                <Column size="isOneThirdDesktop">
                  <PanelComponent title="Jeff Probst's Twitter Feed" iconType="fa fa-twitter" style={twitterPanelStyle}></PanelComponent>
                </Column>
              </Columns>
            </section>
          </Columns>
        </Container>

    )
  }
}
