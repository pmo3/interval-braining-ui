ApplicationManifest ||= Rack::Offline.configure do
  %w[
    application.css
    application.js
  ].each do |asset|
    cache ActionController::Base.helpers.asset_path(asset)
  end
  cache 'templates.html'
  network '*'
end
