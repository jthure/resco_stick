defmodule RescoStick.Repo do
  use Ecto.Repo,
    otp_app: :resco_stick,
    adapter: Ecto.Adapters.Postgres
end
