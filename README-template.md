# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![Theme 1 (Desktop Layout)](./screenshots/Desktop-layout-theme-1.jpeg)
![Theme 1 (Mobile Layout)](./screenshots/Mobile-layout-theme-1.jpeg)
![Theme 2 (Mobile Layout)](./screenshots/Mobile-layout-theme-2.jpeg)
![Theme 3 (Mobile Layout)](./screenshots/Mobile-layout-theme-3.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
/* Just learnt how to use multiple themes */
body.theme-1 {
  --numkey-color: hsl(30, 25%, 89%);
  --numkey-hover-color: white;
  --numkey-text-color: hsl(221, 14%, 31%);
  --numkey-shadow-color: hsl(28, 16%, 65%);

  --keypad-background-color: hsl(223, 31%, 20%);
  --background-color: hsl(222, 26%, 31%);

  --text-color: white;

  --display-color: hsl(224, 36%, 15%);
  --display-text-color: white;

  --equals-key-color: hsl(6, 63%, 50%);
  --equals-key-hover-color: hsl(5, 67%, 59%);
  --equals-key-text-color: white;
  --equals-key-shadow-color: hsl(6, 70%, 34%);

  --del-key-color: hsl(225, 21%, 49%);
  --del-key-hover-color: hsl(225, 60%, 76%);
  --del-key-text-color: white;
  --del-key-shadow-color: hsl(224, 28%, 35%);
}
body.theme-2 {
  --numkey-color: hsl(45, 7%, 89%);
  --numkey-hover-color: hsl(30, 100%, 100%);
  --numkey-text-color: hsl(60, 10%, 19%);
  --numkey-shadow-color: hsl(35, 11%, 61%);

  --keypad-background-color: hsl(0, 5%, 81%);
  --background-color: hsl(0, 0%, 90%);

  --text-color: var(--numkey-text-color);

  --display-color: hsl(0, 0%, 93%);
  --display-text-color: var(--numkey-text-color);

  --equals-key-color: hsl(25, 98%, 40%);
  --equals-key-hover-color: hsl(25, 72%, 59%);
  --equals-key-text-color: white;
  --equals-key-shadow-color: hsl(25, 99%, 27%);

  --del-key-color: hsl(185, 42%, 37%);
  --del-key-hover-color: hsl(185, 51%, 58%);
  --del-key-text-color: white;
  --del-key-shadow-color: hsl(185, 58%, 25%);
}
body.theme-3 {
  --numkey-color: hsl(268, 47%, 21%);
  --numkey-hover-color: hsl(268, 48%, 45%);
  --numkey-text-color: hsl(52, 100%, 62%);
  --numkey-shadow-color: hsl(290, 70%, 36%);

  --keypad-background-color: hsl(268, 71%, 12%);
  --background-color: hsl(268, 75%, 9%);

  --text-color: var(--numkey-text-color);

  --display-color: var(--keypad-background-color);
  --display-text-color: var(--numkey-text-color);

  --equals-key-color: hsl(176, 100%, 44%);
  --equals-key-hover-color: hsl(176, 64%, 66%);
  --equals-key-text-color: hsl(198, 20%, 13%);
  --equals-key-shadow-color: hsl(177, 92%, 70%);

  --del-key-color: hsl(281, 89%, 26%);
  --del-key-hover-color: hsl(281, 51%, 53%);
  --del-key-text-color: white;
  --del-key-shadow-color: hsl(285, 91%, 52%);
}
/* Also learnt how to make a toggle */
.toggle-container {
  width: 75px;
  position: relative;
  height: 25px;
  background-color: var(--keypad-background-color);
  border-radius: 20px;
  cursor: pointer;
}
.toggle-button {
  transition: ease-out var(--transition-delay);

  position: absolute;
  margin: 4px;
  width: 17px;
  height: 17px;
  border-radius: 17px;
  background-color: var(--equals-key-color);
}
```

```js
// this code was for the toggle and themes
const swap_theme = () => {
  const body = document.querySelector("body");
  if (body.className == "theme-1")
    document.querySelector("body").className = "theme-2";
  else if (body.className == "theme-2")
    document.querySelector("body").className = "theme-3";
  else if (body.className == "theme-3")
    document.querySelector("body").className = "theme-1";
};
let currentTheme = 1;
document.querySelector(".toggle-container").onclick = () => {
  const toggle_button = document.querySelector(".toggle-button");
  swap_theme();
  switch (currentTheme) {
    case 1:
      toggle_button.style = "transform: translateX(25px);";
      currentTheme = 2;
      break;
    case 2:
      toggle_button.style = "transform: translateX(50px)";
      currentTheme = 3;
      break;
    case 3:
      toggle_button.style = "transform: translateX(0px)";
      currentTheme = 1;
      break;
  }
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
