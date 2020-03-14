const request = require('request');
const cheerio = require('cheerio');

request('https://blogger.googleblog.com',(error,response,html)=>{
    if(!error && response.statusCode == 200){
        // console.log(html);
        const $ = cheerio.load(html); // Load the entire object
        const headerDesc = $('.header-desc'); // Used for choosing the class that we want to select
        //console.log(headerDesc); // Displays the entire description
        console.log(headerDesc.html()); // Rendering the text 

        const headerTitle = $('.header-title'); // Used for choosing the class that we want to select
        //console.log(headerTitle); // Displays the entire description
        //console.log(headerTitle.html()); // Rendering the text 
        //console.log(headerTitle.text());
        //const output = headerTitle.find('h1').text();

        // const output = headerTitle
        //     .children('a')
        //     .parent()
        //     .next()
        //     .text();

        const output = headerTitle.find('a').attr('href');

        console.log(output);
        
    }
})