require 'test_helper'

class ApplicationHelperTest < ActionView::TestCase

  include IntervalBrainingUI::ApplicationHelper

  context '#angular_template' do

    should 'should prepend angular_templates path if missing' do
      view.expects(:render).with('interval_braining_ui/angular_templates/test', {}).twice.returns('test')
      angular_template('test')
      angular_template('interval_braining_ui/angular_templates/test')
    end


    should 'render template script tag with type of text/ng-template' do
      view.expects(:render).with('interval_braining_ui/angular_templates/test', {}).returns('test')
      assert_match(/<script[^>]+type="text\/ng-template"/, angular_template('test'))
    end


    should 'should use path for script id if no id given' do
      view.expects(:render).with('interval_braining_ui/angular_templates/test', {}).returns('test')
      assert_match(/<script[^>]+id="test"/, angular_template('test', nil))
    end


    should 'should use given id for script id' do
      view.expects(:render).with('interval_braining_ui/angular_templates/test', {}).returns('test')
      assert_match(/<script[^>]+id="not_test"/, angular_template('test', 'not_test'))
    end


    should 'render the referenced view' do
      view.expects(:render).with('interval_braining_ui/angular_templates/test', {}).returns('test')
      angular_template('test')
    end

  end

end
