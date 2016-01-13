Rails.application.routes.draw do
  resources :flights
  resources :planes
  root :to => 'pages#app'

  resources :planes do
    resources :flights do
      resources :reservations
    end
  end

  resources :reservations
  resources :flights
  resources :users

  get '/login' => 'pages#login'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
