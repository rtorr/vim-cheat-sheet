vim-cheat-sheet
===============

Yet another vim cheat sheet.

[http://vim.rtorr.com/](http://vim.rtorr.com/)

## Languages

One of the goals of this project are to support
as many languages as possible.

### Adding a Language

If you are not a developer, try using this form
[Submit a Language Form](https://docs.google.com/forms/d/1Jeb8PltRALKrpd-sy6zX5P7SYZft0P48bLuQz1N7LAs/viewform).

All of the questions should be translated to your new language.

If you are a developer, follow the setup below. The main language data is in the `_config.yml`, and examples of what to copy
to make a new language can be found in the `lang` folder.

### Setting up for development

Read about installing [jekyll](http://jekyllrb.com/)

```
cd vim-cheat-sheet
bundle install
bundle exec jekyll serve --watch
```

Then open your browser to [http://localhost:4000/](http://localhost:4000/)

The default languge is english us, and that data can be found in `_config.yml`. Other languages can be found in `lang/*.html`.
