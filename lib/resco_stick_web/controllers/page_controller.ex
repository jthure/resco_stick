defmodule RescoStickWeb.PageController do
  use RescoStickWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
