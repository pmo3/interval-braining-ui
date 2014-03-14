module IntervalBrainingUI
  class ApplicationController < ActionController::Base

    def index
      render :nothing => true, :layout => 'interval_braining_ui/application'
    end


    def templates
      render 'templates', :layout => false
    end

  end
end
