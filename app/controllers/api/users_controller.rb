class Api::UsersController < ApplicationController
  def index
    # return only physicians 
    @physicians = User.where(physician: true)
  end
end
