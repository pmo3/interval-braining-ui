source 'https://rubygems.org'

gemspec

group :development, :test do
  gem 'jasmine-rails'
end

group :test do
  gem 'coveralls', :require => false
  gem 'mocha', :require => false
end


platforms :ruby do
  gem 'pg'
  gem 'therubyracer'
end


platforms :jruby do
  gem 'activerecord-jdbcpostgresql-adapter'
  gem 'therubyrhino'
end


platforms :rbx do
  gem 'racc', '~> 1.4'
  gem 'rubinius-coverage'
  gem 'rubysl', '~> 2.0'
end
