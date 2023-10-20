---
sidebar_position: 4
id: staging-environment
---

# "staging" Environment

> Staging is used to show off test-ready features to internal staff before going live. It can also be used to test a feature with live data before going live. Be aware you are modifying live data!

## Prerequisites

[Same as development prerequisites](development-environment#prerequisites)

## V2 Projects

```bash
ssh {{user}}@10.1.2.55          # SSH into the Ubuntu server
# OR for v2-premier-line: `ssh premieradmin@72.167.52.182` (GoDaddy Ubuntu)
cd /srv/www/staging
git pull
git checkout {{my-feature-branch}}
npm i
# IMPORTANT!!! modify the PORT the project runs on so you don't conflict with LIVE
#     OR for v2-premier-line: the projects are already running on `staging.{{premierSiteDomain}}.com`
npm run build                   # creates production build for error-checking & showcase speed
npm run start
```

## V1 Projects

> due to the database connector used, V1 projects development environments are on the IBM i server
> with the exception of JDS-HOME, which you can host locally with XAMPP

```bash
ssh {{user}}@10.1.2.3       # SSH into the IBM i server
# OR for v1-premier-line: `ssh premieradmin@72.167.52.182` (GoDaddy Ubuntu)
cd /www/staging/{{project}}
# OR for v1-premier-line `cd /srv/www/staging`
git pull
git checkout {{my-feature-branch}}
# URLs are:
#   - staging.jdsindustries.com:8888 (SHOP project)
#   - staging.jdsindustries.com:8887 (BROWSE project)
#   - staging.jdsindustries.com:8886 (JDS-HOME project)
#   - staging.{{premierSiteDomain}}.com` (v1-premier-line)
```

## Related Help
* [connect to the JDS Ubuntu server](servers#jds-ubuntu-server)
* [connect to the IBM i server](servers#ibm-i-server)
