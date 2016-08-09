Zambesi Documentation Site Generator for GitBook
================================================

The Zambezi documentation site generator for GitBook is a plugin which outputs a documentation website, in the Zambezi style.

Usage
-----

First, install the plugin:

```sh
npm install --save-dev gitbook-plugin-zambezi-docs
```

Then add a file in your project root, called `book.json` – or if you already have a `book.json` – and add the plugin:

```json
{
  "plugins": [ "zambezi-docs" ]
}
```

That's it! Now, if you build your documentation using [gitbook] you'll instantly have a Zambezi branded site. To test it, try running:

```sh
gitbook serve .
```

Configuration
-------------

There are a few things you may configure, either directly in `book.json` or indirectly, such as in the case of adding a project logo. A full configuration looks as such:

```json
{
  "plugins": [ "zambezi-docs" ]
  "pluginsConfig": {
    "zambezi-docs": {
      "logo": "relative/path/to/logo.svg",
      "color": "#ff00ff"
    }
  }
}
```

The two configuration options are:

- `"logo"`: Snazz up your site with a fancy logo, by pointing out the path at wich to find it! If unspecified, then any file named logo, with a common image type extension (e.g. `png`, `jpg`, or `svg`) will be used. If no such file exists, no logo will be displayed.

- `"color"`: The main color that you'd like to associate with your project. This color will influence the color palette of the entire site!

Found an issue, or want to contribute?
--------------------------------------

If you find an issue, want to start a discussion on something related to this project, or have suggestions on how to improve it? Please [create an issue](../../issues/new)!

See an error and want to fix it? Want to add a file or otherwise make some changes? All contributions are welcome! Please refer to the [contribution guidelines](CONTRIBUTING.md) for more information.

License
-------

Please refer to the [license](LICENSE.md) for more information on licensing and copyright information.