<!-- Header -->

<h1 align="center">grepper-cli</h1>
<div align = 'center'>
    <a href = 'https://github.com/Dan-Gamin/grepper-cli/issues'>
        <img src = 'https://img.shields.io/github/issues/Dan-Gamin/grepper-cli'/>
    </a>
    <a href = 'https://github.com/Dan-Gamin/grepper-cli/pulls'>
        <img src = 'https://img.shields.io/github/issues-pr/Dan-Gamin/grepper-cli'/>
    </a>
    <a href = 'https://github.com/Dan-Gamin/grepper-cli/releases'>
        <img src = 'https://img.shields.io/github/v/release/Dan-Gamin/grepper-cli?include_prereleases&label=Latest%20Release'/>
    </a>
    <!-- Github actions badges could be generated. -->
</div>
<br>

<!-- Content -->

An unoffical CLI for [codegrepper](https://www.codegrepper.com/).

[codegrepper](https://www.codegrepper.com/) is a website that houses a lot of snippets of code that are supposed to fix simple problems such as reversing an array, or a foreach loop on an object.

**grepper-cli** allows you to search and view answers from codegrepper in your terminal.

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [✨ Features](#-features)
- [Installation](#installation)
- [Usage](#usage)
  - [Options](#options)
  - [Commands](#commands)
    - [search|s &lt;query&gt; [options]](#searchs-query-options)

## ✨ Features

<!-- For planned features:
- *📝 **Planned**: Text*
 -->

- 🔎 Search

  - Language Filtering
  - Syntax Highlighting (Only Javascript and Python at the moment)
  - Specificable amount of results
  - Raw JSON results from the API, because

- _📝 **Planned**:_ 👨‍💻 _Snippet Creation (Authentication Required)_
  - _Use your favorite code editor. (Such as VSCode, Vim, etc.)_
  - _Help others (maybe even yourself in the future) quickly_
- _📝 **Planned**:_ 👍👎 _Snippet Rating (Authentication Required)_
  - _Get the most useful answers to the top!_
- **Want even _more_? Maybe make an issue at [github](https://github.com/Dan-Gamin/grepper-cli/issues).**

## Installation

<!-- Test out **grepper-cli** with `npx`.

```cmd
npx grepper-cli
``` -->

It's recommended to Install **codegrepper-cli** globally.

```cmd
npm i -g grepper-cli
```

This will allow you to use **codegrepper-cli** like a normal terminal command.

## Usage

```ps
grepper [command] [options]
```

### Options

<dl>
  <dt>-V, --version</dt>
  <dd>Display the version number.</dd>
  <dt>-h, --help</dt>
  <dd>Display help fro the cli or given command.</dd>
</dl>

### Commands

#### search|s &lt;query&gt; [options]

Searches a given query.

**Arguments:**

<dl>
  <dt>query</dt>
  <dd>Search Query.</dd>
</dl>

**Options:**

<dl>
  <dt>-l, --language &lt;lang&gt;</dt>
  <dd>Language of the code.</dd>
  <dt>-a, --amount &lt;of results&gt;</dt>
  <dd>The number of results to be returned. <i>(default: 3)</i></dd>
  <dt>-r, --raw, --json</dt>
  <dd>Prints API results in json form.</dd>
  <dt>-h, --help</dt>
  <dd>Display help for the cli or given command</dd>
</dl>
