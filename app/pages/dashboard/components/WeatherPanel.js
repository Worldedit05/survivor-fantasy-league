import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Title, Panel, PanelHeading, PanelBlock, Icon, Level, LevelItem, Heading } from 're-bulma';

export default class WeatherPanelComponent extends React.Component {

  render() {

    const { weatherData } = this.props;

    let content = "";

    if (weatherData.fetched) {
      content = (
        <section>
          <Level>
            <LevelItem hasTextCentered>
              <Title size="is3"><i>Mamanuca Islands, Fiji</i></Title>
            </LevelItem>
          </Level>
          <br />
          <Level>
            <LevelItem hasTextCentered>
              <Heading>Condition</Heading>
              <Title>{weatherData.currentWeather.current.condition.text}</Title>
            </LevelItem>
            <LevelItem hasTextCentered>
              <Title><img src={weatherData.currentWeather.current.condition.icon}></img></Title>
            </LevelItem>
          </Level>
          <br />
          <br />
          <Level>
            <LevelItem hasTextCentered>
              <Heading>Temp</Heading>
              <Title>{weatherData.currentWeather.current.temp_f}°F</Title>
            </LevelItem>
            <LevelItem hasTextCentered>
              <Heading>Humidity</Heading>
              <Title>{weatherData.currentWeather.current.humidity}%</Title>
            </LevelItem>
            <LevelItem hasTextCentered>
              <Heading>Feels Like</Heading>
              <Title>{weatherData.currentWeather.current.feelslike_f}°F</Title>
            </LevelItem>
          </Level>
          <br />
          <br />
          <Level>
            <LevelItem hasTextCentered>
              <Heading>Wind Direction</Heading>
              <Title>{weatherData.currentWeather.current.wind_dir}</Title>
            </LevelItem>
            <LevelItem hasTextCentered>
              <Heading>Wind MPH</Heading>
              <Title>{weatherData.currentWeather.current.wind_mph}</Title>
            </LevelItem>
            <LevelItem hasTextCentered>
              <Heading>Precipitation</Heading>
              <Title>{weatherData.currentWeather.current.precip_in} in</Title>
            </LevelItem>
          </Level>
        </section>
      )
    }

    return (
      <Panel>
        <PanelHeading style={this.props.style}><Icon className="icon" icon={this.props.iconType}/>
          {this.props.title} {this.props.icon}
        </PanelHeading>
        <PanelBlock>
          {content}
        </PanelBlock>
      </Panel>
    )
  }
}
