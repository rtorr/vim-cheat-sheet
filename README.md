vim-cheat-sheet
===============

Yet another vim cheat sheet.

[http://vim.rtorr.com/](http://vim.rtorr.com/)

## Languages

One of the goals of this project is to support
as many languages as possible.

### Adding a Language

If you are a developer, follow the setup below. The main language data is in `_config.yml`, and examples of what to copy
to make a new language can be found in the `lang` folder.

### Setting up for development

#### Vagrant

```
vagrant up
```

#### Local

Read about installing [jekyll](http://jekyllrb.com/)

```
cd vim-cheat-sheet
bundle install
bundle exec jekyll serve
```

Then open your browser to [http://localhost:4000/](http://localhost:4000/).  Changes to any of the files except `_config.yml` will automatically be reflected by Jekyll; simply reload the page in your browser.

The default languge is english us, and that data can be found in `_config.yml`. Other languages can be found in `lang/*.html`.

[This project follows the Contributor Covenant Code of Conduct](http://contributor-covenant.org/version/1/4)