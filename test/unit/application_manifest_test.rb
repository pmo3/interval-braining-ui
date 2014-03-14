require 'test_helper'

class ApplicationManifestTest < ActiveSupport::TestCase

  context 'ApplicationManifest constant' do

    should 'define ApplicationManifest constant from Rack::Offline instance' do
      require 'application_manifest' unless defined?(ApplicationManifest)
      assert_kind_of(Rack::Offline, ApplicationManifest)
    end

  end

end
