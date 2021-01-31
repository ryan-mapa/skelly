Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index] do
      resources :appointments, only: [:index]
    end 
  end 
end
