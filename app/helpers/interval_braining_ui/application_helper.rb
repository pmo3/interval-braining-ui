module IntervalBrainingUI
  module ApplicationHelper

    def angular_template(path, id = nil)
      content_tag(:script, :type => 'text/ng-template', :id => id || path) do
        path = File.join('interval_braining_ui', 'angular_templates', path) unless /^interval_braining_ui\/angular_templates/ === path
        render path
      end
    end

  end
end
