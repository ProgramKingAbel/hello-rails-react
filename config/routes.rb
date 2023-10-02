Rails.application.routes.draw do
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
  namespace :v1 do
    get 'greetings/random', to: 'greetings#random_greeting'
  end
end

  root 'greetings#index'
end
