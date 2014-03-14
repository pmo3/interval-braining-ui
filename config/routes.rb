require 'application_manifest'

IntervalBrainingUI::Engine.routes.draw do

  root :to => 'application#index'

  get 'application.manifest' => ApplicationManifest
  get 'templates' => 'application#templates'

end
