---
title: "Next 13 & the new app router"
date: "2023-06-19"
image: "next-13.png"
excerpt: "Next is currently improving the routing and layouts experience and aligning with the future of React..."
isFeatured: false
---

Next is currently improving the routing and layouts experience and aligning with the future of React with the introduction of the app directory. It exists alongside the existing pages directory.

**The app directory**

- Every route has its own directory, page component rendered is located in a pages.js file within the directory
- We can store other components in the path's directory. These will not affect routing if they are not named page.js.
- There are some files with reserved names that can be defined in each pages directory, f.ex. loading.js, template.js, layout.js

**Client and server components**

- Server components are rendered on the server, no client side features can be used here, like the window object or typical React hooks (like useEffect). They lack interactivity with the client and can be good for hiding code and secrets. They can also make sure you don't ship most of the dependencies, and has direct access to backend.
- Client components are similar to the previous type of components in next.js, can use browser, event listeners, all hooks, provide interactivity and ship their JS code to the client
- All components in app-router are server components by default, using "use client" on the top of the file specifies client component

**Layouts**

- Render a child component (passed automatically and is the page.js component)
- If sub-directories don't specify it's own layout.js file the top-level layout is used

**Server actions**

- ⚠ Still experimental feature
- Enable execution of server-side code based on events on clinet
- Built on "Actions" in React - an experimental feature, allowing you to run async code in response to a user interaction
- [More here. ](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)

**Intercepting routes**

- Intercept a request for a route.
- Build pages that behave differently based on other factors

**Features that will not prevail in app router from the pages router**

- getStaticProps, getServerSideProps, getStaticPaths
  - Replaced by new server actions
- Custom document + app component
  - Can be replaced by the root layout.
- next/head
  - The new App router offers built-in support for metadata, example:

```js
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World",
};

export default function Page() {
  return <>...</>;
}
```

[Further read.](https://nextjs.org/blog/next-13)
