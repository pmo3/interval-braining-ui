module IntervalBrainingUI
  class Engine < ::Rails::Engine
    isolate_namespace IntervalBrainingUI

    initializer 'interval_braining_ui.assets.precompile'  do |app|
      app.config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
      app.config.assets.precompile += %w[.svg .eot .woff .ttf]
      Mime::Type.register 'font/opentype', :font
    end

    initializer 'interval_braining_ui.inflections' do
      ActiveSupport::Inflector.inflections(:en) do |inflect|
        inflect.acronym 'UI'
        inflect.acronym 'XSRF'
      end
    end

    initializer 'interval_braining_ui.xsrf_token' do
      ActiveSupport.on_load(:action_controller) do
        include IntervalBrainingUI::XSRFCookieHelper
        after_action :set_xsrf_cookie
        alias_method_chain(:verified_request?, :xsrf_cookie)
      end
    end
  end
end
