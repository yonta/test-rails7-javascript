Rails.application.routes.draw do
  root "sakes#index"

  get "/sakes", to: "sakes#index"
end
