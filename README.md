# Content collection project example

[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/withastro/astro/tree/latest/examples/basics?file=%2FREADME.md)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

<img width="1375" alt="Screenshot 2023-02-02 at 14 00 08" src="https://user-images.githubusercontent.com/35943047/216367540-ae2fb9a9-0bc6-4cec-9cbf-3d71ac0b4f28.png">

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── content/
│   │   └── newsletter
│   │       ├── post-1.md
│   │       └── post-2.md
|   ├── config.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── newsletter
│       │   ├── [slug].astro
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

In this porject, astro will create the following routes:
newsletters: `/newsletter/post-1` and `/newsletter/post-2` which is defined in `src/pages/newsletter/[slug].astro`. The `slug` is the name of the file without the extension.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components. If you are looking to extend Astro's functionality, you can add your own components to `src/components/`.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://docs.astro.build) or jump into Astro [Discord server](https://astro.build/chat).

You can also checkout the [Astro starter kit on CodeSandbox](https://codesandbox.io/p/sandbox/musing-banach-j1qiqf)
