require 'test_helper'

class XSRFCookieHelperIntegrationTest < ActionDispatch::IntegrationTest

  context 'after_action' do

    should 'add XSRF-TOKEN cookie if missing' do
      token = 'token'
      ActionController::Base.any_instance.expects(:form_authenticity_token).returns(token)
      get '/'
      assert_equal token, cookies['XSRF-TOKEN']
    end

    should 'update XSRF-TOKEN cookie if outdated' do
      token = 'token'
      ActionController::Base.any_instance.expects(:form_authenticity_token).returns(token)
      get '/', {}, {'XSRF-TOKEN' => 'old_token'}
      assert_equal token, cookies['XSRF-TOKEN']
    end

  end

end
