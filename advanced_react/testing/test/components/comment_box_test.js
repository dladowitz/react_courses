import { renderComponent, expect } from '../test_helper.js';
import CommentBox from '../../src/components/comment_box.js';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  })

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  it('has a top level class name', () => {
    expect(component).to.have.class('comment-box');
  });

  describe('enterering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows text that is entered', () => {

    });

    it('when submitted, clears text', () => {

    });
  });
});
