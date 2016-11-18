# Ibex Climbing Gym
## Design Document

Sammy Brownlow<br>
Zoe Kendall<br>
November 2016<br>

### <b>TODO:</b><br>
* Images
* Links
* Individual Responsibilities
* Any comments

### Mission
For this project, our goal was to create an interactive website for a imaginary climbing gym that we founded. The website is intended to provide information about not only the gym but also services offered, with the ability to sign up for events and memberships online. Through our site, we hope to open the sport of climbing to those of all abilities and interests, including athletes, students, families, and community members in the hopes of fostering a love for this sport.

### Design Points/Key Requirements

#### <i>Conceptual Design</i>
To begin the design process, we looked at websites for climbing gyms currently open in the country to compose a list of elements we would want to include. Gyms looked at included Peak Experiences (Midlothian, VA), Central Rock Gym (Hadley, Worcester, Cambridge, Watertown, and Randolph, MA and Glastonbury, CT), and Carabiners (New Bedford, MA). From there, we organized our main topics into categories that could go in a navigation bar and began conceptual sketches of how our website pages would look and how the different pages would link together.<br>

#### <i>Layout</i>
Upon receiving feedback on our conceptual sketches, we reconsidered how we wanted to manage the layout of our pages. We decided to have one main layout that was simple and could apply to a majority of the pages (e.g. - the <a href = "index.html">home</a>, <a href = 'rates.html'>rates</a>, and <a href = 'contact.html'>contact us</a> pages). Having a main layout would provide our site a level of professionalism while still allowing for flexibility for various types of information to display (e.g. - many images in the <a href = 'gallery.html'>gallery</a>). For the main layout, we chose a grid display following the golden ratio, with a left-hand column taking up about a third of the space and a right-hand one taking the other two-thirds (<a href = 'style.css'>style.css</a>, lines Q, P, O).
<!--Why did we do this? How did it make the site more effective.-->
<br>

#### <i>Color Scheme</i>
After deciding our layout, we worked on styling just the home page for color. Our process in this was to first start with simple colors built into CSS, but we soon realized that we would need a color scheme to give our site a sense of unity and cohesiveness. Once we decided to choose a color scheme, we decided on either a five- or six-color palette, with the addition of neutral like black and white. At first, we worked with a color palette found on <a href = "https://color.adobe.com/explore/newest/">Adobe Color Capture</a>, a website and app by Adobe that lets you make color schemes either by hand or by taking a picture. The first two such palettes, while they had a combination of intensities and hues, did not work well when viewed in a browser, so we moved on to...
<!--website we used here-->
which allowed us to generate a random palette, then keep colors we liked and generate more until we achieved a palette.
<!--Why did we do this? How did it make the site more effective.-->
<br>

#### <i>Navigation</i>
We decided that there should be a header layout component common to all our pages that would contain the <a href = 'logos/icglogo2.jpg'>ICG logo</a> as a link to the home page and a navigation bar with the main categories of our site. Doing so allows for easy and intuitive navigation about our site, which, since it is designed to promote our gym, we deemed a must. This increases the effectiveness of our site because we won't get new visitors or members if people get frustrated trying to navigate our site.<br>

#### <i>Interaction</i>
Since our site is designed to get people of all ages interested in climbing promote a love of the sport, we decided that interaction was crucial in our site design. This was based on the assumption that people are more likely to move away from a simple, static webpage than one that attracts them with color and responds to their actions. So in designing our interactive website, we knew we wanted not just links, but also rollover effects, animation or slideshows, and other interaction handlers such as onclick and onkeydown.

###### CSS
Incorporating rollover effects was the simplest, as it could be done in CSS with the ":hover" pseudoclass, allowing us to easily create rollover effects for our navigation bar and any other links we had to our other pages (<a href = 'style.css'>style.css</a>, lines X, Y, Z). We also wanted rolling over the navigation categories to cause a dropdown menu to appear, if applicable (<a href = 'style.css'>style.css</a>, lines AA). The purpose of the rollover effects was to give a clear visual signal to users that they can click on that element to trigger interaction, making our site both more engaging and more effective in its presentation of information.

###### JavaScript
The <a href = 'index.html'>home page</a> slideshow was a little more complicated, as it required scripting. Thankfully, we had learned about slideshows in class, so Zoe incorporated that into our website. We wanted a slideshow right on the home page to attract possible customers and gym-goers with what our walls look like and what they can climb at ICG. Hopefully with an attention-grabbing slideshow on the main page, our site will be more effective in attracting prospective climbers and members.<br><br>
Handling user clicks and key presses is most evident in the <a href = 'gallery.html'>Gallery</a>, which displays image thumbnails and enlarges them when clicked. The goal of this interaction was to provide site visitors with images of climbing to attract them to ICG. However, this interaction was most difficult, since neither of us had much experience coding interactive elements using pure JavaScript (Zoe had some using the jQuery API). When an image is clicked, and onclick handler will enlarge it, along with navigation to move to the next image to the left or right. Enlarging of the image will also occur with some overhead, such as dropping a dark but not fully opaque screen (div) down over the thumbnails to draw focus to the larger image. All the changes involved manipulating the DOM from <a href = 'script.js'>script.js</a>. The main roadblocks related to the DOM that were solved by reading <a href = 'stackoverflow.com'>StackOverflow</a> included how to determine the image dimensions (StackOverflow link 1 below), how to determine the best height for the screen (StackOverflow links 2-3 below), how to give handlers to objects just created in the JavaScript and how best to call them (StackOverflow links 4-5 below), and how to hide elements (StackOverflow link 6 below). Since Zoe did not know much pure JavaScript, the answers given on the forum were used to broaden her JavaScript knowledge. In every instance, the main goal of reading StackOverflow was not to find blocks of code to use, but to determine syntax for what was needed; because of that, there was not a whole lot of adaptation beyond adjusting the variables to work in <a href = 'script.js'>script.js</a>. After the first image is enlarged, the overhead performed, and the handlers added, switching images was easy with the use of simple conditionals. One of these conditionals listened to the onkeydown handler using the event keyCode (because Zoe can never remember all the keyCodes, a list of them found on <a href = 'https://css-tricks.com/snippets/javascript/javascript-keycodes/'>CSS-Tricks</a> was referenced). Finally, clicking outside the enlarged image will "close" it by hiding both the screen and the container of the image.<br>

#### <i>Images</i>


#### <i>Links</i>


### Individual Responsibilities

### Sources
Most sources used are linked above within the Design Document, but below are links to any sources that were all pages of the same site or that were used for reference separate from what is discussed above.<br>
#### <i>StackOverflow</i>
1) <a href = 'http://stackoverflow.com/questions/106828/javascript-get-image-height'>http://stackoverflow.com/questions/106828/javascript-get-image-height</a><br>
2) <a href = 'http://stackoverflow.com/questions/5484578/how-to-get-document-height-and-width-without-using-jquery'>http://stackoverflow.com/questions/5484578/how-to-get-document-height-and-width-without-using-jquery</a><br>
3) <a href = 'http://stackoverflow.com/questions/14001483/document-body-clientheight-not-working-javascript'>http://stackoverflow.com/questions/14001483/document-body-clientheight-not-working-javascript</a><br>
4) <a href = 'http://stackoverflow.com/questions/3316207/add-onclick-event-to-newly-added-element-in-javascript'>http://stackoverflow.com/questions/3316207/add-onclick-event-to-newly-added-element-in-javascript</a><br>
5) <a href = 'http://stackoverflow.com/questions/23800977/javascript-how-to-use-onclick-function-also-with-keyboard'>http://stackoverflow.com/questions/23800977/javascript-how-to-use-onclick-function-also-with-keyboard</a><br>
6) <a href = 'http://stackoverflow.com/questions/6242976/javascript-hide-show-element'>http://stackoverflow.com/questions/6242976/javascript-hide-show-element</a><br>
#### <i>Other</i>
<a href = 'http://www.cs.smith.edu/~nhowe/Teaching/csc105/examples/slides.html'>CSC105 Class Examples</a>