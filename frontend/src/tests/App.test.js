import { render } from '@testing-library/react';
import App from '../App';
import Artist from '../components/Artist';
import Artists from '../components/Artists';
import { BrowserRouter as Router } from 'react-router-dom'

test('matches the snapshot', () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});

test('matches the snapshot', () => {
  const component = render(
    <Router >
      <Artist />
    </Router>);
  expect(component).toMatchSnapshot();
});

test('matches the snapshot', () => {
  const component = render(
    <Router >
      <Artists />
    </Router>);
  expect(component).toMatchSnapshot();
});