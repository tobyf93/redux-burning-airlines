class PagesController < ApplicationController
  def app
    redirect_to login_path if @current_user.nil?
  end

  def login
  end
end
