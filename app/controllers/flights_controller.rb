class FlightsController < ApplicationController
  before_action :set_flight, only: [:show, :edit, :update, :destroy]

  # GET /flights
  # GET /flights.json
  def index
    if params[:plane_id]
      @flights = Flight.where :plane_id => params[:plane_id]
    else
      @flights = Flight.all
    end
    # render @flights.as_json( :include => :plane )
    render :json => @flights.to_json(:include => [:plane, :reservations])
  end

  # GET /flights/1
  # GET /flights/1.json
  def show
    @reservations = Reservation.where :flight_id => @flight.id
    render :json => @reservations
  end

  # GET /flights/new
  def new
    @flight = Flight.new
  end

  # GET /flights/1/edit
  def edit
  end

  # POST /flights
  # POST /flights.json
  def create
    @flight = Flight.new(flight_params)

    respond_to do |format|
      if @flight.save
        format.html { redirect_to @flight, notice: 'Flight was successfully created.' }
        format.json { render :show, status: :created, location: @flight }
      else
        format.html { render :new }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end

    rows = 5
    columns = 5

    for row in 1..rows
      for column in 1..columns
        @reservation = Reservation.new
        @reservation.row = row
        @reservation.column = column
        @reservation.user_id = nil
        @reservation.save
        @flight.reservations << @reservation
      end
    end

  end

  # PATCH/PUT /flights/1
  # PATCH/PUT /flights/1.json
  def update
    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to @flight, notice: 'Flight was successfully updated.' }
        format.json { render :show, status: :ok, location: @flight }
      else
        format.html { render :edit }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /flights/1
  # DELETE /flights/1.json
  def destroy
    @flight.destroy
    respond_to do |format|
      format.html { redirect_to flights_url, notice: 'Flight was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def flight_params
      params.require(:flight).permit(:origin, :destination, :date, :plane_id)
    end
end
