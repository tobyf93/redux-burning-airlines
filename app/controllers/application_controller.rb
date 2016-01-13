class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :authenticate

  private
  def authenticate
    @current_user = User.find_by_id session[:user] if session[:user]
  end
end
