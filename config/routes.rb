Rails.application.routes.draw do
  root :to => 'welcome#index'

  resources :planes do
    resources :flights do
      resources :reservations
    end
  end

  resources :reservations
  resources :flights
  resources :users
  root :to => 'pages#app'

  get '/signup' => 'pages#signup'
  get '/login' => 'pages#login'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
