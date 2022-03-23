# space-tourism

# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information






### Links

- Solution URL: https://github.com/joy21fs/space-tourism/
- Live Site URL: https://joy21fs.github.io/space-tourism/

## My process

### What I learned

**HTML**

**- Semantic HTML**
  - we can have different classes/stylings for the same heading(e.g., the
    title as <h1> can have <span> with different styles, but as it is the header, we shouldn't write html and separate the same line as <h1> and <h5> just for styling purpose, that is, we want to it to be semantic)
  - we can use the <article> tag for self-contained content, and we can add another <header> inside the <article>;
    - if there's a subheading, always use a <p> rather than having more than one heading tags
- Using **data attributes** - to store some extra information that doesn't have any visual representation, can be anything just starting with data-
  e.g., data-visible="false", data-index-number="123"
  -> can be helpful to tap into in js (values will be returned as strings)
- we can wrap <img> inside the <picture> element, which can have more than one source for the browser to choose which is best to render, with the src of the <img> being the default
  e.g., 
  <picture>
    <source srcset="assets/crew/image-douglas-hurley.webp" type="images/webp">
    <img src="assets/crew/image-douglas-hurley.png" alt="Douglas Hurley">
  </picture>
- the hidden attribute (boolean)

**Accessibility**

- @media (prefers-reduced-motion: reduce) {} for users who wish to turn off animations
- **sr-only** utility class can be useful if we are creating buttons with no  
  context, we can create <span class="sr-only"> and add context wrapped in the button that explains what it's about for assistive tech to read it to sr users, but on our webpage, it will be hidden
  cf. if we want to display certain elements for decorative purposes bu wouldn't be necessary for screen readers, we can ad 'aria-hidden="true"' so they won't be read to screen readers
- we can also add the "role" attribute to describe the element's role and "aria-label" attribute for content description
  e.g., 
  <div role="tablist" aria-label="destination list">
    <button role="tab"> Moon </button>
  </div>
  <article role="tabpanel">
- if we use px as unit for font-sizes, it could override users' settings and preferences (e.g., if they initially set up to have bigger font-sizes as default on their browsers) --> rem would be a better unit to respect user settings
- if we are on the same page but showing different content based on buttons clicked, we can use <button **aria-selected="true"**></button> to let assistive tech know which button is selected (or what tab is open and have other buttons aria-selected set to "false"
- detecting arrow key presses -> **onkeydown** & **keycodes**, **focus()**

**  Navigation Bar**

  - The **aria-controls** attribute: When an interactive or input control, be it a checkbox, radio button, tab panel, icon, toggles, or other, has an impact on another element in a document or application, the aria-control attributes should be included to indicate which element or elements the user interface widget controls. (the value would be the id of the element)

  **Tabs**

  - Terminology:

    - tabbed interface component: a set of tabs and associated tab panels
    - **tab panel:** contents area that is associated with a tab
    - **tab:** the label/title area of the tab panel. This is where you click to activate a tab panel
    - **tablist:** the set of tabs

  - The tabindex global attribute indicates that its element can be focused, default value =0. If tabindex <0, it cannot be focused
    ***
    A negative value is useful when you have off-screen content that appears on a specific event. The user won't be able to focus any element with a negative tabindex using the keyboard, but a script can do so by calling the focus() method.
  - adding the **skip-to-content** link (with href link to the id of the main content) can be helpful for keyboard users without having to go through all other links/tabs when using the tab key

**CSS**

- Export design system Figma file to png and create a preview html for easier reference
- common **CSS resets**, creating **utility classes** & **custom properties** first to promote productivity
  e.g., display: flex, grid and block can be useful utility classes that can be easily reused
- the use of undefine variables can be helpful when we want to set specific values to certain elements, while still having default value for others.
  e.g., gap: var(--gap, 1rem);
- the **list-style property** for <li>s
- we can style an element only when its attribute equals to certain value by using **the attribute selector**
  e.g., .underline-indicators > [aria-selected="true"] {}
- the outline property (vs. border)
  - the outline is created outside of the element and might overlap with  
    other elements, usually used for the element to stand out
- **hover** vs **focus** -> using mouse or keyboard
- The **scrollbar-gutter** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows
  e.g., scrollbar-gutter: stable;
- to darken the background-image, i created a psuedo element of the container and used the filter property
  e.g., **filter: brightness(0.7)**;

- **RWD**

  - media query level 4
    @media (30em <= width <= 50em ) { ... }

- **Dealing with browser support**
  @supports (property: value){} -> only apply the stylings in the {} if the browser supports the property and the value mentioned in the ()
  e.g., 
  .primary-navigation {
    --underline-gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    background: hsl( var(--clr-dark) / 0.95);
    /* backdrop-filter: blur(1.5rem); */

  }

 ** @supports (backdrop-filter: blur(1rem)) {
  .primary-navigation {
    background: hsl( var(--clr-white) / 0.05);
    backdrop-filter: blur(1.5rem);
    }
  }**

- **Positioning**

  - the **place-items property** is a shorthand property for both align-items and justify-items vs. place-content (for align-content & justify-content)
  - **background-position: bottom center** sets the background-image's position relative to the layer (can be helpful to change at media query breakpoints if the background-image might overlap with the content text and affect its readability )
  - The **inset** CSS property: a shorthand that corresponds to the top, right, bottom, and/or left properties.
  - the **object-fit** and **object-position** properties
    e.g., object-fit: contain; (maintain its aspect ratio while fitting within the element's content box)
    object-fit: cover; (filling the element's entire content box)
    object-potistion: <position> = [ [ left | center | right ] || [ top | center | bottom ] or using length values

- **Sizing**

  - the aspect-ratio property
    syntax-- **aspect-ratio: (width)/(height);**
  - **clamp(MIN, VAL, MAX); fluid typography**
    e.g., font-size: clamp(5rem, 8vw + 1rem, 9.375rem) means we are setting the minimum font-size at 5rem, if the calculated value of 8vw is greater than 5rem, font-size would be set to 8vw, until it reaches the maximum value of 9.375rem; best practice is to add 1rem with viewport units to respond to zooming in & out (which viewport units don't respond to; if we are using clamp() for positioning like logos, then we don't necessarily need the +1rem as we don't have to change the positioning at zooming in/out)
  - the ch unit: however wide the “0” character is in a given typeface  
    that’s the measure of one ch. In monospace (fixed-width) fonts, where all characters are the same width, 1ch equals one character. In proportional (variable-width) fonts, any given character could be wider or narrower than the “0” character
  - the ex unit: the height of the lowercase "x"

  - if the font-size I set is bigger than the default heading size, i seemed to have to specifically set its line-height to 1 or else its line-height would still be the default font-size's height

- **Spacing**

  - The **padding-inline** CSS shorthand property defines the logical inline
    start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation. --> if text is written from left to right, padding-inline adds padding to the left and right; the shorthand for top and bottom would be block (also work with border and margin)
  - **.parent > *:where(:not(:first-child))** and *:where(:not(:last-child))
    can be useful when adding margin-top or margin-bottom to create equal spacing between elements inside a parent element
  - **:where()** and **:is()**; no specificity (easier to overwrite if needed) vs has specificity
  - padding: min(20rem, 10vh) or max(6rem, 10vw) -> the padding will depend
    on which value is smaller (for min) or bigger (for max)

- **Grids**

  - **the gap property** (can be used with flexbox as well)
  - **the minmax property used with CSS grids**
    e.g., grid-template-column: 2em minmax(0, 40rem) 2em;
    - we can create two more columns as padding on the left and right, and if we set minmax and set the value for max to be 1fr, we can make the columns that contain our content sit in the middle of the page
  - Sizing grid columns with min-content (used as length)
    e.g., grid-template-rows: min-content 1fr (2rows)
  - **the dot in the grid-template-areas** means empty area
    e.g., grid-template-areas:
    '. title title .'
    '. image tabs .'
  - grid-column: span 2;
    -> Contributes a grid span to the grid item's placement such that the corresponding edge of the grid item's grid area is n lines from the opposite edge.

- **Colors**

  - **hsla(235 100% 50% / 1);** /* CSS Colors 4 space-separated values */
    (the last value is the opacity, which we can separate it from hsl with "/");
    we can keep the hsl "values" as variable but not the entire hsl(), so we can easily change the opacity of an element. e.g.,

    :root {
      --clr-dark: 230 35% 7%;
    }

    .circle {
      background-color: hsl(var(--clr-dark) / 0.2);
    }

- Creating **the frosted glass effect** (glassmorphism)

  **- the background should have an opacity not equal to 1 (somehow transparent)
  - setting the blurring effect by backdrop-filter: blur(value);**
    (need to use the -webkit- prefix for safari browser support)

- Animations (using CSS Transitions)
  - **transition: <property> <duration> <timing-function> <delay>;**
    e.g., transition: transform 500ms ease-in-out;

**JS**

- finding the parent container of an element with ".parentNode"
  e.g., const tabContainer = targetTab.parentNode;
- **async** and **defer** with scripts

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
    
### Useful resources

- caniuse.com - helps me with learning browser support for modern css properties
    
    
### Screenshots

![joy21fs github io_space-tourism_ (1)](https://user-images.githubusercontent.com/95619834/159518769-17a55f7b-2fb7-4c3f-9cd4-dbc787ee654a.png)![joy21fs github io_space-tourism_ (2)](https://user-images.githubusercontent.com/95619834/159518806-4eb43d0b-9b0b-4a2f-8720-cda6d6549dd8.png)
![joy21fs github io_space-tourism_ (3)](https://user-images.githubusercontent.com/95619834/159518817-e7d0bb50-c9c2-429d-99b4-cfc46cee5f6d.png)
![joy21fs github io_space-tourism_ (4)](https://user-images.githubusercontent.com/95619834/159518820-3cf8d351-0423-4140-91f1-e13a08256ed6.png)
![joy21fs github io_space-tourism_ (5)](https://user-images.githubusercontent.com/95619834/159518824-844e0274-3c64-48fa-ad90-4c36922aadd9.png)
![joy21fs github io_space-tourism_ (6)](https://user-images.githubusercontent.com/95619834/159518828-cf8d7198-ae46-43dd-a7a8-fa4d0b366774.png)
![joy21fs github io_space-tourism_ (7)](https://user-images.githubusercontent.com/95619834/159518833-c679bf95-0dd9-4a0e-b8e2-3ac5611a7e32.png)
![joy21fs github io_space-tourism___crew(iPhone SE) (1)](https://user-images.githubusercontent.com/95619834/159518843-87a9163a-6de1-44da-bfca-f8dd36e67999.png)
![joy21fs github io_space-tourism___crew(iPhone SE)](https://user-images.githubusercontent.com/95619834/159518850-942a6a51-2d95-427b-a53e-75dc85542ad1.png)
![joy21fs github io_space-tourism_](https://user-images.githubusercontent.com/95619834/159518857-dc1415aa-6f98-43cf-92cc-dc38bcc3819a.png)
![joy21fs github io_space-tourism_(iPhone SE) (1)](https://user-images.githubusercontent.com/95619834/159518866-cc0bfad7-c258-4ce0-bb32-ab9cddd22290.png)
![joy21fs github io_space-tourism_(iPhone SE)](https://user-images.githubusercontent.com/95619834/159518871-c1e82cb9-b43f-4b70-98e3-b0aacbb77236.png)
