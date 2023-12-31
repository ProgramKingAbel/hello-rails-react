Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
  namespace :v1 do
    get 'greetings/random', to: 'greetings#random_greeting'
  end
end

get 'greetings/random', to: 'greetings#index'

  root 'root#index'
end
