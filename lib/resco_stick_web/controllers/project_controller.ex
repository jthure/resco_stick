defmodule RescoStickWeb.ProjectController do
  use RescoStickWeb, :controller

  alias RescoStick.Projects
  alias RescoStick.Projects.Project

  action_fallback RescoStickWeb.FallbackController

  def index(conn, _params) do
    projects = Projects.list_projects_with_relations()
    render(conn, "index.json", projects: projects)
  end

  def create(conn, %{"project" => project_params}) do
    with {:ok, %Project{} = project} <- Projects.create_project(project_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.project_path(conn, :show, project))
      |> render("show.json", project: project)
    end
  end

  def show(conn, %{"id" => id}) do
    project = Projects.get_project!(id)
    render(conn, "show.json", project: project)
  end

  def update(conn, %{"id" => id, "project" => project_params}) do
    Projects.get_project!(id)
    |> Projects.update_project(project_params)

    projects = Projects.list_projects_with_relations()
    render(conn, "index.json", projects: projects)
  end

  def delete(conn, %{"id" => id}) do
    project = Projects.get_project!(id)

    with {:ok, %Project{}} <- Projects.delete_project(project) do
      send_resp(conn, :no_content, "")
    end
  end
end
