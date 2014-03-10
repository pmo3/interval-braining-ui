require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(*Rails.groups)
require 'interval_braining_ui'

module Dummy
  class Application < Rails::Application
    # Silence I18n warning
    config.i18n.enforce_available_locales = false
  end
end

