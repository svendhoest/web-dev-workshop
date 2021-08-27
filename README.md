# Web Development Introduction - Assignment

## Setup

Please refer to the [setup](./SETUP.md) section.

## Assignments

### HTML

The goal of this HTML assignment is the creation of fictive blog homepage. Use
the existing HTML document (`index.html`), remove everything you don't need and
start from there.

The blog homepage should contain the following items:

* A list of blog post teasers.  
  Be creative and just invent a couple of topics or use lorem ipsum.
* Each teaser should consist of an image, a title, a short description and a
  link to the respective detail page. (For now don't build those additional
  pages, only if there's time left)
* The blog homepage needs a catchy headline.
* Add a navigation with navigation items that lead to other fictitious sections
  of the blog. (Don't build those pages for now.)
* The blog homepage should have a footer that holds meta information for the
  blog.

For sample images you can use what ever images you like (they are best placed
in the `/media` folder) or use a service like <https://placeholder.com>:

```html
<img src="https://via.placeholder.com/150/fff/000/?text=sample+image">
```

![sample image](https://via.placeholder.com/150/f00/000/?text=sample+image)

Sample texts can be created via <https://www.lipsum.com>.

__Always keep the semantics of your homepage in mind!  
HTML provides a lot of building blocks that you can use to properly define the
elements of your website.__

_Formatting and styling is not part of this assignment! Only concentrate on the
pure HTML based document structure._

#### __Bonus Assignment (if there's still time)__

Build the pages you have referenced in the list of blog teasers and in the
navigation!  
You can use fictitious texts and placeholder images here.

### CSS

* Use CSS to style the blog homepage that you have created in the previous
  assignment.  
  Set `color`s, `font-size`s and `font-family`s to your liking and assign proper
  spacings to adjacent elements using `padding`s and `margin`s. Utilize
  `border`s and `background-color`s to offset elements from each other.  
  There are also a couple of interesting CSS features like `box-shadow`,
  `border-radius`, `text-shadow`, `border-image`, why not try some of these?

* Introduce a sidebar with some (fictitious) blog related content, for example
  the latest comments, most important tags for the blog, most read blog posts
  and so on.

* The sidebar should be positioned on the side of the list of blog posts

CSS styles can be placed in the existing file (`/style/style.css`). It is already
referenced in the main HTML file and contains some CSS rules, feel free to remove
anything you don't need.

This sketch represents a possible structure of how your blog home page might
look like. This is not a specification but merely a mental model to help you
getting a better feel for a possible setup. ![sketch](./media/sketch_web.svg)

### JavaScript & TypeScript

Create a class that keeps track of the elapsed time.  

_Hint: The function `Date.now()` provides you with the elapsed time in
milliseconds since the beginning of the UNIX epoch._

The class should implement the `Timekeeper` interface:

```ts
type timekeeperCallback = (elapsedTime: number) => void

interface Timekeeper {
    registerCallback: (callback: timekeeperCallback) => Timekeeper
    reset: () => void
}
```

Via the `registerCallback` method the `Timekeeper` instance should provide the
possibility to register a callback. That callback should be called every second,
transporting the elapsed time since the site has been opened.

Create a instance of this class whenever your blog homepage loads. Then register a
handler that prints the elapsed time into the header of the blog homepage.

_Hint: you can use `setInterval` to periodically execute a piece of code._

Format the elapsed time in readable form (e.g. 1min 20s).

In the folder `/script` you'll find the file `index.js`. It is directly referenced
by the main HTML file and gets executed whenever the page loads. Use this as the
starting point for your application. From there you can reference any other module
you create.  
Your additional class is best placed in a separate file, for example `Timekeeper.ts`.

#### __Bonus Assignment (if there's still time)__

Add a reset button that resets the elapsed time (using the `reset` method from the
`Timekeeper` interface).
