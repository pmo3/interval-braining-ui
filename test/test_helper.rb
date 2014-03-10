ENV['RAILS_ENV'] ||= 'test'

if ENV['CI']
  require 'simplecov'
  require 'coveralls'
  Coveralls.wear!('rails')

  SimpleCov.formatter = Coveralls::SimpleCov::Formatter
  SimpleCov.root(Rails.root)
  SimpleCov.start('rails') do
    add_filter 'config/'
    add_filter 'db/'
    add_filter 'script/'
    add_filter 'test/'
  end
end

require File.expand_path('../dummy/config/environment.rb',  __FILE__)
require 'minitest/autorun'
require 'mocha/setup'
require 'shoulda/context'
require 'factory_girl_rails'
require 'faker'
require 'rails/test_help'


Rails.application.eager_load!
Rails.backtrace_cleaner.remove_silencers!

# Load support files
Dir["#{File.dirname(__FILE__)}/support/**/*.rb"].each { |f| require f }
