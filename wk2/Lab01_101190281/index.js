const fs = require("fs")
const csv = require('csv-parser');

async function deleteFile(filePath) {
    try {
      if(fs.existsSync(filePath)){
          fs.unlinkSync(filePath)
          console.log(`${filePath} has been deleted.`)
      }
      else{
          console.log(`${filePath} does not exist`)
      }
    } catch (error) {
      console.error(error.message);
    }
}

async function createFile(country){
    try {
        await fs.writeFileSync(`${country}.txt`,"country,year,population", (err) => {
            if(err) console.log(err);
        })
        let countryName = ''
        if(country == 'canada')countryName="Canada"
        else if(country == 'usa')countryName="United States"
        await fs.createReadStream("input_countries.csv")
                    .pipe(csv())
                    .on('data', (row) => {
                        if(row['country'] == countryName)
                            fs.appendFile(`${country}.txt`,`\n${row['country']},${row['year']},${row['population']}`, 
                            (err) => {if(err)console.log(err)}
                            )
                    }
                    )
    } catch (error) {
        console.log(error)
    }
}


(async function(){
    await deleteFile("canada.txt")
    await deleteFile("usa.txt")
    await createFile("canada")
    await createFile("usa")
})()    