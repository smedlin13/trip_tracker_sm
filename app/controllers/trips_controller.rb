class TripsController < ApplicationController
  before_action :set_user

  def index
    @trips = @user.trips
    render component: 'Trips', props:{ user: @user, trips: @trips }
  end

  def show
    @trip = @user.trips.find(params[:id])
    render component: 'Trip', props: { user: @user, trip: @trip }
  end

  def new
    @trip = @user.trips.new
    render component: 'TripNew', props: { user: @user, trip: @trip }
  end

  def edit
    @trip = @user.trips.find(params[:id])
    render component: 'TripEdit', props: { user: @user, trip: @trip }
  end

  def create
    @trip = @user.trips.new(trip_params)
    if @trip.save
      redirect_to user_trips_path
    else 
      render component: 'TripNew', props: { user: @user, trip: @trip }
    end
  end
  
  def update
    @trip = @user.trips.find(params[:id])
    if @trip.update(trip_params)
      redirect_to user_trips_path
    else  
      render component: 'TripEdit', props: { user: @user, trip: @trip }
    end
  end

  def destroy
    @trip = @user.trips.find(params[:id])
    @trip.destroy
    redirect_to trip_trips_path(@trip)
  end

  private
    def set_user
      @user = User.find(params[:user_id])
    end
    def trip_params
      params.require(:trip).permit(:name, :duration)
    end
  
end
