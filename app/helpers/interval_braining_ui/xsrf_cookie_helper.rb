module IntervalBrainingUI
  module XSRFCookieHelper

    private

    def set_xsrf_cookie
      return if cookies['XSRF-TOKEN'] == (token = form_authenticity_token)
      cookies['XSRF-TOKEN'] = token
    end

    def verified_request_with_xsrf_cookie?
      # Also allow verifiation based on presence of X-XSRF-TOKEN header added by
      # AngularJS from XSRF-TOKEN cookie:
      # http://docs.angularjs.org/api/ng/service/$http#description_security-considerations_cross-site-request-forgery-protection
      verified_request_without_xsrf_cookie? || form_authenticity_token == request.headers['X-XSRF-TOKEN']
    end

  end
end
