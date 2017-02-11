import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Columns, Column, Container, Hero, HeroBody } from 're-bulma';

import { fetchSurvivors } from '../../../actions/survivorActions';

import SurvivorCard from './SurvivorCard.js';

@connect((store) => {
  return {
    survivorData: store.survivorData,
  }
})

export default class SurvivorPanel extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchSurvivors());
  }

  render () {

    let { survivorData } = this.props;
    let content = "";

    if (survivorData.survivors.length > 0) {
      content = survivorData.survivors.map((survivor, index) => <Column size="is3">
        <SurvivorCard key={survivor._id} firstName={survivor.firstName} lastName={survivor.lastName} points={survivor.weeklyPoints} img={survivor.img}></SurvivorCard>
      </Column>)
    }

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
            <Columns isMultiline>
              {content}
            </Columns>
            </section>
          </Columns>
        </Container>

    )
  }
}
