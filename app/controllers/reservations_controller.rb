class ReservationsController < ApplicationController
  def update
    reservation = Reservation.find params[:id]
    reservation.update :user_id => params[:user_id] if reservation.user_id.nil?

    render json: reservation
  end
end
