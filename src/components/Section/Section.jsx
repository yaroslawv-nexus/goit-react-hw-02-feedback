import React, { Component } from 'react';
import { Title, Container } from './Section.styled';

export class Section extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </Container>
    );
  }
}
