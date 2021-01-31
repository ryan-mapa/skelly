class Api::UsersController < ApplicationController
  def index
    # return only doctors
    doctors = User.where(physician: true)
    render json: doctors
  end
end
