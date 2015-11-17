vim-cheat-sheet
===============

Yet another vim cheat sheet.

[http://vim.rtorr.com/](http://vim.rtorr.com/)

## Languages

One of the goals of this project is to support
as many languages as possible.

### Adding a Language

If you are not a developer, try using this form
[Submit a Language Form](https://docs.google.com/forms/d/1Jeb8PltRALKrpd-sy6zX5P7SYZft0P48bLuQz1N7LAs/viewform).

All of the questions should be translated to your new language.

If you are a developer, follow the setup below. The main language data is in `_config.yml`, and examples of what to copy
to make a new language can be found in the `lang` folder.

### Setting up for development

Read about installing [jekyll](http://jekyllrb.com/)

```
cd vim-cheat-sheet
bundle install
bundle exec jekyll serve
```

Then open your browser to [http://localhost:4000/](http://localhost:4000/).  Changes to any of the files except `_config.yml` will automatically be reflected by Jekyll; simply reload the page in your browser.

The default languge is english us, and that data can be found in `_config.yml`. Other languages can be found in `lang/*.html`.

# Contributor Code of Conduct

As contributors and maintainers of this project, we pledge to respect all people who contribute through reporting issues, posting feature requests, updating documentation, submitting pull requests or patches, and other activities.

We are committed to making participation in this project a harassment-free experience for everyone, regardless of level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, or religion.

Examples of unacceptable behavior by participants include the use of sexual language or imagery, derogatory comments or personal attacks, trolling, public or private harassment, insults, or other unprofessional conduct.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct. Project maintainers who do not follow the Code of Conduct may be removed from the project team.

This code of conduct applies both within project spaces and in public spaces when an individual is representing the project or its community.

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by opening an issue or contacting one or more of the project maintainers.

This Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org), version 1.1.0, available at [http://contributor-covenant.org/version/1/1/0/](http://contributor-covenant.org/version/1/1/0/)
