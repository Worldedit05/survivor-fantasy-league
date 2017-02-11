import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Title, Panel, PanelHeading, PanelBlock, Icon, Level, LevelItem, Heading, Container } from 're-bulma';

export default class TwitterPanelComponent extends React.Component {

  render() {
    return (
      <Panel>
        <PanelHeading style={this.props.style}><Icon className="icon" icon={this.props.iconType}/>
          {this.props.title} {this.props.icon}
        </PanelHeading>
        <PanelBlock>
          <Container>
            <a className="twitter-timeline" data-width="350" data-height="305" data-theme="light" href="https://twitter.com/JeffProbst">Tweets by JeffProbst</a>
          </Container>
        </PanelBlock>
      </Panel>

    );
  }
}
