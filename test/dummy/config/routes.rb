Rails.application.routes.draw do
  mount JasmineRails::Engine => '/test_javascripts'
  mount IntervalBrainingUI::Engine => '/'
end
