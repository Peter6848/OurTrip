Rails.application.routes.draw do
  resources :trips do
    resources :expenses, except: [:new]
    resources :destinations, only: [:new, :create, :show, :destroy, :index]
    resources :trip_users, only: [:create]
  end

  resources :packing_lists, only: [:index] do
    resources :items, only: [:new, :create, :destroy]
  end


  resources :destinations, except: [:new, :create, :show, :destroy, :index] do
    resources :events
    resources :accomodations, except: [:show]
    resources :transportations, except: [:show]
  end

  resources :user_expenses, only: [:create]
  resources :user_trips, only: [:index, :create]
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/users', to: 'users#index'
  get '/register', to: 'users#new'
  post '/register', to: 'users#create'
end
