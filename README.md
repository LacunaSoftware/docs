# Lacuna Software Docs

This repo contains the source code of Lacuna Software's documentation portal, [docs.lacunasoftware.com](https://docs.lacunasoftware.com)

## Contributing

We are not taking public contributions at the moment, but will soon begin accepting pull requests. Stay tuned!

## Authoring documentation

Here are the most important links about how to author documentation:

* [Mastering Markdown - GitHub Guides](https://guides.github.com/features/mastering-markdown/)
* [DocFX Flavored Markdown - DocFX website](https://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html)
* [Links and Cross References - DocFX website](https://dotnet.github.io/docfx/tutorial/links_and_cross_references.html)
* [Overwrite Files - DocFX website](https://dotnet.github.io/docfx/tutorial/intro_overwrite_files.html)

## Markdown cheatsheet

Here are sintaxes for the most common elements.

### Bold

```md
This is a **bold** statement
```

### Italic

```md
This is a *foreign word*.
```

### Lists

Unordered:

```md
* Item A
* Item B
* Item C
```

Ordered:

```md
1. Item 1
1. Item 2
1.1. Item 2.1
1. Item 3
```

The actual numbering does not matter, DocFX will order the list when rendering the file. Prefer repeating `1.` on every item instead of writing `1.`, `2.`, `3.` etc because this allows for easy reodering of items.

### Images

```md
![Alt Text](url)
```

Images are kept on the `images` folder, either on project subfolders or on the folder itself. So, say you are on `docs.en-us/articles/project-name/article.md` trying to reference an image on `images/project-name/image.png`, you'd do:

```md
![Image name](../../../images/project-name/image.png)
```

Now, say you are on a subfolder of a project, say `docs.en-us/articles/project-name/subfolder/article.md`, trying to reference that same image. You'd need one `../` more:

```md
![Image name](../../../../images/project-name/image.png)
```

Samples:

* [docs.pt-br/articles/pki-sdk/get-started/nuget.md](docs.pt-br/articles/pki-sdk/get-started/nuget.md)
* [docs.en-us/articles/web-pki/browser-support.md](docs.en-us/articles/web-pki/browser-support.md) (image on table)

### Tables

```md
First Header                | Second Header
--------------------------- | -------------
Content from cell 1         | Content from cell 2
Content in the first column | Content in the second column
```

It's not really needed to align columns, this would render the exact same output:

```md
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```

For more complex cases, for instance having the leftmost upper cell blank, use this slightly more complex syntax:

```md
|     | Second Header |
| --- | ------------- |
| Content from cell 1 | Content from cell 2 |
| Content in the first column | Content in the second column |
```

> GitHub markdown specification (which DocFX extends) mandates at least three hyphens (`---`) in each column of the header row (like shown above on the first column).

The header row is always rendered in bold. If you also need the first column in bold, do this:

```md
|              | Ease of use   | Awesomeness  |
| ------------ | ------------- | ------------ |
| **Web PKI**  | Very easy     | So good      |
| **Rest PKI** | Super easy    | Much awesome |
| **PKI SDK**  | Easy peasy    | Wow          | 
```

Text in cells is normally left-aligned. For other alignments:

```md
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

See also:

* [Manual](https://help.github.com/articles/organizing-information-with-tables/)
* Examples
** [docs.en-us/articles/web-pki/index.md](docs.en-us/articles/web-pki/index.md) (table with leftmost upper cell blank)
** [docs.en-us/articles/web-pki/browser-support.md](docs.en-us/articles/web-pki/browser-support.md) (table with centered text)
