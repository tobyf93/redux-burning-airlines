class ReservationsController < ApplicationController
  def update
    reservation = Reservation.find params[:id]
    reservation.update :user_id => params[:user_id]

    render json: reservation
  end
end
