
import { renderComponent, expect } from '../test_helper.js';
import App from '../../src/components/app.js';

describe('App', () => {
  it('shows the correct text', () => {
    const component = renderComponent(App);

    expect(component).to.contain('React simple starter');
  });
});
