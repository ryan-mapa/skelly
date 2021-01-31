class Api::UsersController < ApplicationController
  def index
    # return only doctors
    @physicians = User.where(physician: true)
  end
end
