const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

 
// Writing the headers in the CSV File
writeStream.write(`Title,Link,Date \n`);



request('https://blogger.googleblog.com',(error,response,html)=>{
    if(!error && response.statusCode == 200){
        // console.log(html);
        const $ = cheerio.load(html); // Load the entire object
        $('.post').each((i,el)=>{
            const postTitle =  $(el)
                .find('.title')
                .text()
                .replace(/\s\s+/g,'');
            const link = $(el).find('a').attr('href');
            const date = $(el).find('.publishdate').text().replace(/,/,'');
            // console.log(postTitle,link,date);

            // Writing the row in the CSV File
            writeStream.write(`${postTitle}, ${link}, ${date} \n`);
        });
        console.log('Scarping Done...');
    }
})