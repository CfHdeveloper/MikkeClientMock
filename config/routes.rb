Rails.application.routes.draw do
  get 'user/index'
  get '/' => 'search#top'
  
  get '/search'=>'circle#index'
  get '/circle/:id'=>'circle#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
