
import { renderComponent, expect } from '../test_helper.js';
import App from '../../src/components/app.js';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows the correct text', () => {
    expect(component).to.contain('React simple starter');
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
