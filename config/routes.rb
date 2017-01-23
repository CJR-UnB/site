Rails.application.routes.draw do
  root to: 'static_pages#landing'
  get '/site' => 'static_pages#landing'
end
