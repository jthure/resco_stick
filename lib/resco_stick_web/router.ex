defmodule RescoStickWeb.Router do
  use RescoStickWeb, :router

  # alias RescoStickWeb.{UserController, ProjectController}

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end
  scope "/api", RescoStickWeb do
    pipe_through :api
    resources "/users", UserController
    resources "/projects", ProjectController
  end

  scope "/", RescoStickWeb do
    pipe_through :browser
    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", RescoStickWeb do
  #   pipe_through :api
  # end
end
