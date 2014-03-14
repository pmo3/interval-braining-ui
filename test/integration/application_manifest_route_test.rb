require 'test_helper'

class ApplicationManifestRouteTest < ActionDispatch::IntegrationTest

  context 'manifest response' do

    setup do
      get 'application.manifest'
    end


    should 'return status code 200' do
      assert_response :ok
    end


    should 'have Content-Type of text/cache-manifest' do
      assert_equal @response.headers['Content-Type'], 'text/cache-manifest'
    end


    should 'begin with CACHE MANIFEST header' do
      assert_equal 'CACHE MANIFEST', @response.body[/\A.*$/]
    end


    should 'include expected manifest items' do
      expected_items = [
        /application\.css/,
        /application\.js/,
      ]

      expected_items.each do |expected|
        refute_empty @response.body.scan(expected)
      end
    end

  end
end
