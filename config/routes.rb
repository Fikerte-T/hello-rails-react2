Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "static#index"
  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xht? && req.format.html?
  end
end
