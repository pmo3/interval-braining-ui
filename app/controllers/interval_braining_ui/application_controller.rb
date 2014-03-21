module IntervalBrainingUI
  class ApplicationController < ActionController::Base

    def index
      render :nothing => true, :layout => 'interval_braining_ui/application'
    end

  end
end
