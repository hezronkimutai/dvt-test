import { render } from '@testing-library/react';
import App from '../App';

test('matches the snapshot', () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});