import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Columns, Column, Container, Card, CardImage, Image, CardContent, Content, Title } from 're-bulma';

export default class SurvivorCard extends React.Component {

  render() {
    return (
      <Card>
        <CardImage>
          <Image src={this.props.img}/>
        </CardImage>
        <CardContent>
          <Content style={{ fontSize: '20px', textAlign: "center" }}>
            {this.props.firstName} {this.props.lastName}
          </Content>
        </CardContent>
      </Card>
    )
  }
}
