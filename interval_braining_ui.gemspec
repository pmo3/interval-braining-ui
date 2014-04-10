$:.push File.expand_path('../lib', __FILE__)

require 'interval_braining_ui/version'

Gem::Specification.new do |spec|
  spec.name = 'interval_braining_ui'
  spec.version = IntervalBrainingUI::VERSION
  spec.authors = ['Tristan Crockett', 'Danny Guinther']
  spec.email = ['dev@intervalbraining.com']
  spec.homepage = 'https://github.com/interval-braining/interval-braining-ui'
  spec.summary = 'Client-side UI components of IntervalBraining'
  spec.description = 'Client-side UI components of IntervalBraining'

  spec.test_files = spec.files.grep(%r{^test/})

  spec.add_dependency 'rails', '> 4.0.0', '< 4.2'
  spec.add_dependency 'rack-offline'
  spec.add_dependency 'angularjs-rails'
  spec.add_dependency 'font-awesome-rails'
  spec.add_dependency 'sass-rails', '~> 4.0.0'

  spec.add_development_dependency 'factory_girl_rails'
  spec.add_development_dependency 'faker'
  spec.add_development_dependency 'shoulda-context'
end
