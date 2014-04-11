module IntervalBrainingUI
  class ApplicationController < ActionController::Base

    def index
      render :text => '', :layout => 'interval_braining_ui/application'
    end

  end
end
