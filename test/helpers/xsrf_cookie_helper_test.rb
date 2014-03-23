require 'test_helper'

class XSRFCookieHelperTest < ActionController::TestCase

  DummyController = Class.new(::ActionController::Base) do
    def test_action
      render :nothing => true
    end
    public :set_xsrf_cookie
    public :verified_request_with_xsrf_cookie?
    public :verified_request?
  end

  tests DummyController

  setup do
    Rails.application.routes.draw do
      get '/', :to => 'xsrf_cookie_helper_test/dummy#test_action'
    end
  end

  teardown do
    Rails.application.reload_routes!
  end

  context 'after_action' do

    should 'add XSRF-TOKEN cookie if missing' do
      token = 'token'
      @controller.expects(:form_authenticity_token).returns(token)
      get :test_action
      assert_equal token, cookie
    end

  end


  context 'set_xsrf_cookie' do

    should 'set the cookie if cookie is missing or bad' do
      assert cookie.blank?
      token = 'token'
      @controller.expects(:form_authenticity_token).returns(token)
      @controller.set_xsrf_cookie
      assert_equal token, cookie

      @controller.expects(:form_authenticity_token).twice.returns(token = 'new_token')
      @controller.set_xsrf_cookie
      assert_equal token, cookie

      cookies.expects(:[]=).never
      @controller.set_xsrf_cookie
    end

  end


  context 'verified_request_with_xsrf_cookie?' do

    should 'always call verified_request_without_xsrf_cookie?' do
      @controller.expects(:verified_request_without_xsrf_cookie?).twice
      @controller.verified_request_with_xsrf_cookie?
      @controller.verified_request?
    end


    should 'return true if verified_request_without_xsrf_cookie' do
      @controller.expects(:verified_request_without_xsrf_cookie?).twice.returns(true)
      assert @controller.verified_request_with_xsrf_cookie?
      assert @controller.verified_request?
    end


    should 'return true if X-XSRF-TOKEN header matches form_authenticity_token' do
      token = 'token'
      @controller.stubs(:form_authenticity_token).returns(token)
      @controller.request.stubs(:headers).returns({'X-XSRF-TOKEN' => token})
      @controller.expects(:verified_request_without_xsrf_cookie?).twice.returns(false)
      assert @controller.verified_request_with_xsrf_cookie?
      assert @controller.verified_request?
    end


    should 'return false if X-XSRF-TOKEN header does not match form_authenticity_token' do
      @controller.request.stubs(:headers).returns({'X-XSRF-TOKEN' => 'bad_token'})
      @controller.expects(:verified_request_without_xsrf_cookie?).twice.returns(false)
      refute @controller.verified_request_with_xsrf_cookie?
      refute @controller.verified_request?
    end

  end


  def cookie
    return cookies['XSRF-TOKEN']
  end

end
