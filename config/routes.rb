Rails.application.routes.draw do
  resources :likes do
    collection do
      get :find
    end
  end
  
  resources :posts
  devise_for :users
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: "pages#index"
end
