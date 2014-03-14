require 'application_manifest'

IntervalBrainingUI::Engine.routes.draw do

  get 'application.manifest' => ApplicationManifest
  get 'templates' => 'application#templates'

end
