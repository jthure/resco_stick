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
jonas = RescoStick.Repo.insert!(%RescoStick.Users.User{first_name: "Jonas", last_name: "Thuresson", email: "joth", initials: "joth"})
jakub = RescoStick.Repo.insert!(%RescoStick.Users.User{first_name: "Jakub", last_name: "Bujak", email: "jabu", initials: "jabu"})
jakub = RescoStick.Repo.insert!(%RescoStick.Users.User{first_name: "Daniel", last_name: "Krysztopa", email: "dkr", initials: "dkr"})
jakub = RescoStick.Repo.insert!(%RescoStick.Users.User{first_name: "Paulina", last_name: "Stefańczyk", email: "past", initials: "past"})
jakub = RescoStick.Repo.insert!(%RescoStick.Users.User{first_name: "Michał", last_name: "Banaś", email: "mban", initials: "mban"})
RescoStick.Repo.insert!(%RescoStick.Projects.Project{name: "AL-RSSE-FS-Admin"})
RescoStick.Repo.insert!(%RescoStick.Projects.Project{name: "AL-RSSE-FS-FSE"})
RescoStick.Repo.insert!(%RescoStick.Projects.Project{name: "AL-RSSE-SC-SCT"})
RescoStick.Repo.insert!(%RescoStick.Projects.Project{name: "AlfaLavalServiceCenterNonALDev"})
