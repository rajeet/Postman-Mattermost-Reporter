require('dotenv').config();
const fs = require('fs');
const path = require('path');
// mattermost url
const url = process.env.MATTERMOST_URL;
// directory path
const directoryPath = `${__dirname}/../newman`;

// this function will create message
function createMessage() {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        const jsonFiles = files.filter(file => path.extname(file) === '.json');

        jsonFiles.forEach(jsonFile => {
            // Read the contents of the file
            fs.readFile(path.join(directoryPath, jsonFile), 'utf8', (err, datas) => {
                if (err) {
                    console.error('Error reading file:', err);
                    return;
                }

                // Do something with the JSON data
                const data = JSON.parse(datas);
                sendMessage(data)
            });
        });
    })
}

// this function will send message to mattermost.
function sendMessage(data) {
    const request = data.Run.Stats.Requests;
    const assertion = data.Run.Stats.Assertions;
    const timings = data.Run.Timings;

    const header_message = `### API Testing for ${data.Collection.Info.Name}. \n `;
    const table_header = `| Total API Request | Pending Request | Failed Request | Total Assertion | Pending assertion | Failed Assertion | Response Average | Response Min | Response Max |\n | :------------ | :---------------: | :---------------: | :---------------: | :---------------: | :---------------: | :---------------: | :---------------: | -----: |\n`;
    const table_data = `| :robot_face:   ${request.total} | :pending: ${request.pending} | :x: ${request.failed} | :robot_face:  ${assertion.total} | :pending: ${assertion.pending} | :x: ${assertion.failed} | :stopwatch: ${timings.responseAverage} ms | :stopwatch: ${timings.responseMin} ms | :stopwatch: ${timings.responseMax} ms |\n`

    const text_message = `{"text": "${header_message} ${table_header} ${table_data}"}`;

    let response = fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;",
        },
        body: text_message,
    });

    response.then((res) => {
        console.log(res);
    })
}



module.exports = createMessage;
