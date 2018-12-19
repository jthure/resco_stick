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
jonas = RescoStick.Repo.insert!(%RescoStick.Users.User{first_name: "Jonas", last_name: "Thuresson", email: "joth123@netcompany.com"})
jakub = RescoStick.Repo.insert!(%RescoStick.Users.User{first_name: "Jakub", last_name: "Bujak", email: "jabu123@netcompany.com"})
jakub = RescoStick.Repo.insert!(%RescoStick.Users.User{first_name: "Daniel", last_name: "Krysztopa", email: "dkr123@netcompany.com"})
jakub = RescoStick.Repo.insert!(%RescoStick.Users.User{first_name: "Paulina", last_name: "Stefańczyk", email: "past123@netcompany.com"})
jakub = RescoStick.Repo.insert!(%RescoStick.Users.User{first_name: "Michał", last_name: "Banaś", email: "mban123@netcompany.com"})
RescoStick.Repo.insert!(%RescoStick.Projects.Project{name: "AL-RSSE-FS-Admin"})
RescoStick.Repo.insert!(%RescoStick.Projects.Project{name: "AL-RSSE-FS-FSE"})
RescoStick.Repo.insert!(%RescoStick.Projects.Project{name: "AL-RSSE-SC-SCT"})
RescoStick.Repo.insert!(%RescoStick.Projects.Project{name: "AlfaLavalServiceCenterNonALDev"})
