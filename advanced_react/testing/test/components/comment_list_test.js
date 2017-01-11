import { renderComponent, expect } from '../test_helper.js';
import CommentList from '../../src/components/comment_list.js';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['hello world', 'hello worlds'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('show each comment that is provided', () => {
    expect(component).to.contain('hello world');
  });
});
