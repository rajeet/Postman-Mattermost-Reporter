
const url = "mattermost_url_link";

// here we should provide the path for report json file.
const data = require("./path_to_file.json");

const request = data.Run.Stats.Requests;
const assertion = data.Run.Stats.Assertions;
const timings = data.Run.Timings;


const header_message = `### API Testing for ${data.Collection.Info.Name}. \n `;
const table_header = `| Total API Request | Pending Request | Failed Request | Total Assertion | Pending assertion | Failed Assertion | Response Average | Response Min | Response Max |\n | :------------ | :---------------: | :---------------: | :---------------: | :---------------: | :---------------: | :---------------: | :---------------: | -----: |\n`;
const table_data = `| :robot_face:   ${request.total} | :pending: ${request.pending} | :x: ${request.failed} | :robot_face:  ${assertion.total} | :pending: ${assertion.pending} | :x: ${assertion.failed} | :stopwatch: ${timings.responseAverage} ms | :stopwatch: ${timings.responseMin} ms | :stopwatch: ${timings.responseMax} ms |\n`




const text_message = `{"text": "${header_message} ${table_header} ${table_data}"}`;

console.log(text_message);
let response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;",
    },
    body: text_message,
  });


let result = response;
result.then((datas)=>{
    console.log(datas)
})

  


