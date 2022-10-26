import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled, StyledOptions } from './FeedbackStyled';

export default class Feedback extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    changeState: PropTypes.func.isRequired,
  };
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
    const { options, changeState } = this.props;
    return (
      <StyledOptions>
        <h2>Please leave feedback</h2>
        {options.map((option, idx) => (
          <ButtonStyled data-type={option} onClick={changeState} key={idx}>
            {this.capitalizeFirstLetter(option)}
          </ButtonStyled>
        ))}
      </StyledOptions>
    );
  }
}
