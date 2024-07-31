# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


### Screenshot

| Mobile                                          | Desktop                                  |
| ----------------------------------------------- | ---------------------------------------- |
| <img src="Screenshot-mobile.png" height="280"/> | <img src="Screenshot.png" height="280"/> |

### Links

- Solution: [Code](/01-QR-code-component/)
- Live Site:  [Demo](https://kris-lu-dev.github.io/Frontend-Mentor-Challenges/01-QR-code-component/)


### What I learned

- **How to apply inside image with border radius as same as outside div**

  The HTML structure:
  ```html
  <div class="card__image">
  <img src="images/image-qr-code.png">
  </div>
  ```
  **Solution 1:** Outer div applys overflow
  ```css
  .card__image {
      border-radius: 10px;

      overflow: hidden;
  }
  ```
  **Solution 2:** Inside image apply inherit
  ```css
  .card__image img {
      border-radius: inherit;
  }
  ```