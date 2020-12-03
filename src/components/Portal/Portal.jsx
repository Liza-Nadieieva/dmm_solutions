import { Component } from 'react';
import ReactDOM from 'react-dom';

export class Portal extends Component {

  el = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.el);
  }
  componentWillUnmount() {
    document.body.removeChild(this.el);
  }
  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
