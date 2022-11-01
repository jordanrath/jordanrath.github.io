export const ModalData = [
            //created an ONION or JSON data blob or Nested inline objects of key value pairs. 'project name' is the a 
            //layer which contains other key value pairs.
            {
                id: 1,
                name: 'Band Website',
                internalName: 'bandWebsite',
                description: 'The Band Website is built with JavaScript, HTML and CSS.  It features imbedded video, links to get tickets, social media and a shopping cart.',
                href: "https://jordanrath.github.io/index.html",
                images: [
                 {
                     image: '/modalImages/bandFrontPage.png',
                     alt: 'JavaScript band website front page',
                 },
                 {
                     image: '/modalImages/bandProductPage.png',
                     alt: 'JavaScript band website product page',
                 },
                 {
                     image: '/modalImages/bandAboutPage.png',
                     alt: 'JavaScript band website about page',
                 },
                ]
            },    

            {
                id: 2,
                name: 'Food Tracker',
                internalName: 'foodLog',
                description: 'Food Tracker is built with JavaScript, HTML and CSS.  With Food Tracker you can select from a number of foods and customize the macro nutrients that food has.  Once a food has been added Food Tracker will calculate the total calories and add the results to a graph that stores data of all foods that have been added.',
                images: [ 
                 {
                     image: '/modalImages/foodlogFrontPage.png',
                     alt: 'JavaScript food log front page',
                 },
                 {
                     image: '/modalImages/foodlogChart.png',
                     alt: 'JavaScript food log chart',
                 },
                 {
                     image: '/modalImages/foodlogInputs.png',
                     alt: 'JavaScript food log inputs',
                 },
                ]
            },   
        
            {
                id: 3,
                name: 'Online Supermarket',
                internalName: 'superMarket',
                description: 'Supermarket is built with React, HTML and CSS.  Easily navigate through the store and add foods to your cart.  You can edit your cart when ready, you will be sent to checkout with Stripe integration.',
                images: [                
                 {
                     image: '/modalImages/superMFrontPage.png',
                     alt: 'React Supermarket front page',
                 },
                 {
                     image: '/modalImages/superMProducts.png',
                     alt: 'React Supermarket product page',
                 },
                 {
                     image: '/modalImages/superMCart.png',
                     alt: 'React Supermarket cart page',
                 },
                 {
                     image: '/modalImages/superMStripe.png',
                     alt: 'React Supermarket stripe checkout',
                 },
                ]
            },
];
