source 'https://rubygems.org'

gemspec

group :development, :test do
 gem 'bower-rails', :git => 'https://github.com/42dev/bower-rails.git', :ref => 'f4c948f1e0c94872451404e8e9cfeb0c67fb2c38'
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
