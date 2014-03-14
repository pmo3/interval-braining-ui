module IntervalBrainingUI
  class ApplicationController < ActionController::Base

    def templates
      render 'templates', :layout => false
    end
  end
end
