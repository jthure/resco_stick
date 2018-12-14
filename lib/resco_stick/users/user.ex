defmodule RescoStick.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  @derive{Jason.Encoder, only: [:id, :first_name, :last_name, :initials, :email]}
  schema "users" do
    field :email, :string
    field :first_name, :string
    field :initials, :string
    field :last_name, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:first_name, :last_name, :email, :initials])
    |> validate_required([:first_name, :last_name, :email, :initials])
  end
end
