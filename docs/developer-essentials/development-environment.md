---
sidebar_position: 3
id: development-environment
---

# "development" Environment

## Prerequisites

* setup your local computer with [VSCode](https://code.visualstudio.com/download) and [WSL2 (Ubuntu)](https://learn.microsoft.com/en-us/windows/wsl/about)
  * With WSL2, Ubuntu coexists within Windows as an integrated virtual machine & file system
    * Once installed, try this path in Windows explorer: `\\wsl.localhost\Ubuntu`
  * WSL/Ubuntu is MANDATORY for speed and compatibility of web development tooling & libraries
  * Windows is MANDATORY for the JDS Windows networking tools required by Barry/Ben
* set WSL/bash as your default terminal in VSCode
* your local WSL `/home/{{user}}` folder should mimic [Ubuntu dotfiles](https://github.com/jdukleth/ubuntu-dotfiles)
* your local WSL should have Node/NVM installed via [Node Version Manager](nvm)
* have another developer copy your WSL SSH key onto the server(s) `authorized_keys` files
* setup your local & server SSH keys in the GitHub interface
* your IBM i server `/home/{{user}}` folder should mimic [IBM i dotfiles](https://github.com/jdukleth/ibmi-dotfiles)
* [setup your Windows hosts file](hosts-file) with paths for V1 projects

## V2 Projects

On your local machine, inside the WSL/VSCode terminal:

```bash
cd /srv/www                 # V2 development project folders (local computer)
git clone {{git-repo-url}}  # get the URLs from the JDS GitHub page
code {{git-repo-name}}      # opens project in VSCode with "WSL" in bottom-left
npm i                       # installs project dependencies
sudo nano .env              # mimic another developers .env file
npm run dev                 # runs the project on localhost:xxxx (port is project-specific)
```

## V1 Projects

> due to the DB2 database connector used, V1 projects development environments are on the IBM i server instead of your local computer... with the exception of `JDS-HOME` (ODBC) which you can host locally with XAMPP if you prefer

```bash
ssh {{user}}@10.1.2.3           # connect to IBM i server via SSH
cd /www/development/{{user}}    # V1 development project folders (IBM i server)
git clone {{git-repo-url}}      # get the URLs from the JDS GitHub page
# "file -> open folder" in VSCode (can't use `code` command or WSL bc IBM file system is incompatible)
cat .gitignore                  # copy any missing files/folders from another developer
# complete Windows host file prerequisite above
# visit the relevant URL taken from the Windows host file to make sure project works
```

## Related Help
 * [connect to the IBM i (as400)](servers#ibm-i)
 * [getting V1 development URLs working](hosts-file)
 * [installing Node/NPM](nvm)
