# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     RescoStick.Repo.insert!(%RescoStick.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

# RescoStick.Users.create_user(%{first_name: "Jonas", last_name: "Thuresson", email: "joth@netcompany.com"})
jonas = RescoStick.Repo.insert!(%RescoStick.Users.User{first_name: "Jonas", last_name: "Thuresson", email: "joth@netcompany.com"})
jakub = RescoStick.Repo.insert!(%RescoStick.Users.User{first_name: "Jakub", last_name: "Bujak", email: "jabu1@netcompany.com"})
RescoStick.Repo.insert!(%RescoStick.Projects.Project{name: "FS-Admin", locked_by_id: jonas.id})
RescoStick.Repo.insert!(%RescoStick.Projects.Project{name: "FSE"})
RescoStick.Repo.insert!(%RescoStick.Projects.Project{name: "S-C"})
