module IntervalBrainingUI
  class Engine < ::Rails::Engine
    isolate_namespace IntervalBrainingUI

    initializer 'interval_braining_ui.assets.precompile'  do |app|
      app.config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
      app.config.assets.precompile += %w[.svg .eot .woff .ttf]
    end

    initializer 'interval_braining_ui.inflections' do
      ActiveSupport::Inflector.inflections(:en) do |inflect|
        inflect.acronym 'UI'
      end
    end
  end
end
