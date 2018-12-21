defmodule RescoStickWeb.ProjectView do
  use RescoStickWeb, :view
  alias RescoStickWeb.ProjectView

  def render("index.json", %{projects: projects, error: error_message}) do
    %{data: render_many(projects, ProjectView, "project.json"), error: error_message}
  end

  def render("index.json", %{projects: projects}) do
    %{data: render_many(projects, ProjectView, "project.json")}
  end

  def render("show.json", %{project: project}) do
    %{data: render_one(project, ProjectView, "project.json")}
  end

  # def render("project.json", %{project: %{locked_by: locked_by}}) do
  #   IO.inspect(locked_by)
  #   locked_by
  # end
  def render("project.json", %{project: project}) do
    project
  end

end
