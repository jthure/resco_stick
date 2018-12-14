defmodule RescoStick.Repo.Migrations.CreateProjects do
  use Ecto.Migration

  def change do
    create table(:projects) do
      add :name, :string
      add :locked_by_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:projects, [:locked_by_id])
  end
end
