class Api::AppointmentsController < ApplicationController
  def index
    @appointments = User.find_by(id: params[:user_id]).appointments
  end
end
