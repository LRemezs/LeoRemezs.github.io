# Portfolio Website
## Overview

This project was made as a part of Learning People Front End Engineers career path. The task was assigned to create a responsive portfolio website showcasing skills learned throguh HTML, CSS and JavaScript modules. 

## Design

As design was not the primary concern of this project, I gathered inspiration from 2000s when internet was at it infancy. Selecting playful contrasting colors to grab attention but empahsize the play-like nature of this project. Absolute novice-like motive was embraced to avoid distractions from the main goal - showcasing coding skills.

## Structure
The webpage has been structrured in a basic way. There is a landing page with 5 links - About, Skills, Hire Me, Projects, Future.

### Landing Page
The homepage welcomes the visitors with a simple and clear design. The title on top of the page tells user exactly where they have arrived to. On a desktop version there is a horizontal slider with AI generated images and navigation links that provides a simple but elegant access to rest of the site. The slider was created with JavaScript. The idea behind this technology is that a listener is tracking for mouse loaction and on click, imagines a slider in the background that then moves the options either to the left or to the right. A simple hover effect on each of the tiles works as an indicator that the tiles are clickable. A little play on call for action with different font-color. Also as a little easter egg, the call for action option is the only one that consists of two words. 

For responsive version of this page the slider is turned vertical and hover functions are removed. 

### About
The about page provides some more experimental use of CSS and JavaScript. First thing I would like to point your attention to is the "SUPERPOWER" word in the title. While gradient was accomplished with CSS, I wanted to go an extra mile and create flashing stars around the the text. This is created with JavaScript. 

Below the top section there is another CSS trick with sticky notes. On, however, the notes scatter accross the screen to their locations. This was created with CSS only. As it would be too challenging to predict the actual locations for the notes on non-desktop screen, the responsive version of this page just has a single note (with a different text) in the middle. 

### Skills
I have always believed that programmers are probaly the laziest people out there, and this part of the project is a perfect example of this. A neat grid of 9 different skills that I would be looking to improve on in near future. When user clicks on any of the icons, the text field next to the grid is populated with the most up-to-date description of my current skill level. As I plan to advance and improve, I don't want to update this in source code manually every time, hence I used JavaScript to read these descriptions from a text document in repository. These can be adjusted whenver from a comfortable place in folder. While playing around with this, I envisioned way more ways on how to abuse this idea, but that's for future projects.

### Hire Me
As this would potentially be the page that converts the user, I decided to keep it simple. Just a plain business card with key contact details. In future, if this project were to be scaled to a serious Portfolio page, I would place a contact form in this place. 

### Projects
Once again a colorful page. Here I played around with layouts using a mix of grid and flexbox to achieve an easy-to-understand layout. As there is only one project that I have finished at this moment, there is not much else to show on this page.

### Future
Another page for another JavaScript trick. When I decided to dedicate this page for my future goals, my first idea was to design it with a Matrix-style theme. For this I decided to use a JavaScript idea where the text is being looped over to create the glitch-like effect before it is produced. For people in rush, there is an option to skip animation (or restart, if they would like to see it again). Once again, I wouldn't want to edit the paragraph in HTML when this future would become past - hence, the paragrapgh is also read from a text file. 


## Technologies Used
- HTML
- CSS
- JavaScript
- Git
- GitHub
- Developer tools (Chrome & Firefox)

## Testing
Truthfully, the page is has not been tested extensively, however, I made sure to check it from different browsers and from phone.
While testing I had to make sure that responsive design doesn't break the layouts completely, hence I added a media query for screens with width below 768px which would be the closest to the breaking point. 

## Deployment
The page was created with VS Code, a local git directory was used for version control, and then uploaded to GitHub. I have made it live using Git pages.

## Credits
### Content
- All images were generated using an AI tool (BlueWillow)
- Content and structure was planned and created by myself.
- Inspiration for CSS and JavaScript tricks came from my favourite youtubers - Hyperplexed (https://www.youtube.com/@Hyperplexed) and Kevin Powell (https://www.youtube.com/@KevinPowell).
- Knowledge on how to put everything together and not lose my mind while doing so came from amazing staff of Learning People and Codecademy

