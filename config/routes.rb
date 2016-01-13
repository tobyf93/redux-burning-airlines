Rails.application.routes.draw do
  root :to => 'pages#app'
  resources :flights
  resources :planes

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
  get '/app' => 'pages#app'
end
