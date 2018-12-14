defmodule RescoStick.Projects.Project do
  use Ecto.Schema
  import Ecto.Changeset

  @derive{Jason.Encoder, only: [:id, :name, :locked_by]}
  schema "projects" do
    field :name, :string
    belongs_to :locked_by, RescoStick.Users.User

    timestamps()
  end

  @doc false
  def changeset(project, attrs) do
    project
    |> cast(attrs, [:name, :locked_by_id])
    |> validate_required([:name])
  end
end
