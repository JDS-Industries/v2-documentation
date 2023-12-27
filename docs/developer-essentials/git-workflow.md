---
sidebar_position: 2
id: git-workflow
---

# Git Workflow

[JDS GitHub Repositories](https://github.com/JDS-Industries)

> If you aren't using Git you are ruining our codebase!

### Before You Work:

Make sure you have the latest copy of master so you don't create merge conflicts with other developers.

```bash
git checkout master
git pull
```

Then, create a feature branch for what you plan to work on. <mark>1 feature = 1 branch!</mark> You can create multiple feature branches for multiple features and you won't have to worry about them interfering with one another or having issues if one of them doesn't need to be finished.

```bash
git checkout -b my-example-feature
```

### While You Work:

Now you are on the feature branch and you can begin coding. <mark>make commits often</mark> as you complete tasks within the feature.

```bash
git add .
git commit -m "adds input form fields to the example feature"
```

`<code more>`

```bash
git add .
git commit -m "handles form submission for example feature"
```

### When Feature is Complete and at the End of a Work Day:

Push the code up to the feature branch to the JDS GitHub Repository.

```bash
git pull origin master # pre-emptive check for merge conflicts
git push -u origin my-example-feature
```

### When Feature is Complete:

- Go to the [GitHub site](https://github.com/JDS-Industries/) and select the project
- On the project page, click where it says `x branches` near the top
- Locate `my-example-feature` branch in the list and click the button for `New Pull Request`
- Click the FIRST green button to finish creating the Pull Request. DO NOT keep clicking to merge it into master branch.
- Have other developers review the code. Anyone can make comments on any line of code.
- Once you are ready to go live, click the button to merge the pull request into master

### Ready to Go Live!:

Now the code is merged into the master branch but it won't be live until you follow the correct deployment procedure:

- [V2 Production Deployment (v2-internal-apps, v2-express-api, v2-ecommerce, etc)](deployment#V2)
- [V1 Production Deployment (SHOP, BROWSE, etc)](deployment#V1)

