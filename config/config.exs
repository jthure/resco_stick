# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :resco_stick,
  ecto_repos: [RescoStick.Repo]

# Configures the endpoint
config :resco_stick, RescoStickWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "1Cx0ejNK7G5MnF911FKqEfJgmgKhUeEw/QKwgDdwkQuOTTxnwO649FkV6KCEyM0r",
  render_errors: [view: RescoStickWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: RescoStick.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
