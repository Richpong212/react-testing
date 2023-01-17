import {render, screen} from '@testing-library/react';
import Hello from './Hello';

test('renders "Hello World"', () => {
   // eslint-disable-next-line react/react-in-jsx-scope
   render(<Hello />);
   expect(screen.getByText('Hello World')).toBeInTheDocument();
});