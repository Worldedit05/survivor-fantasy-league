import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Container, Columns, Column, Hero, HeroBody, Button } from 're-bulma';

export default class Login extends React.Component {

  render() {
    return (
      <Hero isBold={true} size="isFullheight" color="isDark" style= {{backgroundImage: 'linearGradient(141deg, #1E2749 0%, #273469 71%, #30343F 100%)'}}>
        <HeroBody>
          <Container>
            <Columns>
              <Column size="is4" offset="isOffset4">
                <h1 className="title" style={{color: '#fff'}}>Login</h1>
                <div className="box">
                  <label className="label">Email</label>
                  <p>
                    <input className="input" type="text" placeholder="jsmith@example.org"></input>
                  </p>
                  <label className="label">Password</label>
                  <p className="control">
                    <input className="input" type="password" placeholder="●●●●●●●"></input>
                  </p>
                  <hr></hr>
                  <p className="control">
                    <Button color="isPrimary">Login</Button>
                    <Button>Cancel</Button>
                  </p>
                </div>
                <p className="has-text-centered login-links">
                  <a href="register.html">Register an Account</a>
                  |
                  <a href="#">Forgot password</a>
                  |
                  <a href="#">Need help?</a>
                </p>
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    )
  }
}
