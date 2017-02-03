import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Columns, Column, Container, Hero, HeroBody } from 're-bulma';

import TableRender from './Table.js';
import PanelComponent from './Panel.js';

export default class AdminPanel extends React.Component {

  render () {
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
