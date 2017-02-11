import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Columns, Column, Container, Hero, HeroBody } from 're-bulma';

import ScoreTable from './ScoreTable.js';

@connect((store) => {
  return {
    userData: store.userData,
  }
})

export default class ScorePanel extends React.Component {

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
                <ScoreTable></ScoreTable>
              </Column>
            </section>
          </Columns>
        </Container>

    )
  }
}
