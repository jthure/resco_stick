defmodule RescoStick.Projects do
  @moduledoc """
  The Projects context.
  """

  import Ecto.Query, warn: false
  alias RescoStick.Repo

  alias RescoStick.Projects.Project

  @doc """
  Returns the list of projects.

  ## Examples

      iex> list_projects()
      [%Project{}, ...]

  """
  def list_projects do
    Repo.all(Project)
  end
    @doc """
  Returns the list of projects with locked_by relation.

  ## Examples

      iex> list_projects()
      [%Project{}, ...]

  """
  def list_projects_with_relations do
    (from p in Project,
      left_join: u in assoc(p, :locked_by),
      order_by: p.name,
      preload: [locked_by: u])
    |> Repo.all
    # Repo.all from p in Project, preload: [:locked_by]
  end

  @doc """
  Gets a single project.

  Raises `Ecto.NoResultsError` if the Project does not exist.

  ## Examples

      iex> get_project!(123)
      %Project{}

      iex> get_project!(456)
      ** (Ecto.NoResultsError)

  """
  def get_project!(id), do: Repo.get!(Project, id)

  @doc """
  Creates a project.

  ## Examples

      iex> create_project(%{field: value})
      {:ok, %Project{}}

      iex> create_project(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_project(attrs \\ %{}) do
    %Project{}
    |> Project.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a project.

  ## Examples

      iex> update_project(project, %{field: new_value})
      {:ok, %Project{}}

      iex> update_project(project, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_project(%Project{} = project, attrs) do
    if(project.locked_by_id && Map.get(attrs, "locked_by_id")) do
      {:error, "Project is already locked. Unlock it first."}
    else
      project
      |> Project.changeset(attrs)
      |> Repo.update()
    end
  end

  @doc """
  Deletes a Project.

  ## Examples

      iex> delete_project(project)
      {:ok, %Project{}}

      iex> delete_project(project)
      {:error, %Ecto.Changeset{}}

  """
  def delete_project(%Project{} = project) do
    Repo.delete(project)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking project changes.

  ## Examples

      iex> change_project(project)
      %Ecto.Changeset{source: %Project{}}

  """
  def change_project(%Project{} = project) do
    Project.changeset(project, %{})
  end
end
