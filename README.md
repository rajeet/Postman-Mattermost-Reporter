# Postman Mattermost Reporter Project

This project allows you to run a Postman collection and generate a summary report using the Newman reporter JSON summary package. The summary report is then converted into a Mattermost message and sent to specified Mattermost groups.

## Configuration

The configuration file `.env` contains the following settings:

- `MATTERMOST_URL`: The URL of the Mattermost server. The path to the Postman collection file.
- `API_COLLECTION_URL`: The path to the Postman collection file or url.
- `ENVIRONMENT_URL`: The path to the Postman environment file or url

You can update these settings as per your requirements.

## Getting Started

To get started with this project, follow the steps below:

1. Clone the project repository to your local machine.
2. Install the required dependencies by running the following command:
    > `npm install`
3. Set up your Postman collection and environment files.
4. Create the configuration file `.env` with your Postman collection and environment file paths, Mattermost server details, to which the summary report will be sent.
5. Run the project by running the following command:
   > `npm run generate_report`

This will run your Postman collection and generate a summary report, which will then be converted into a Mattermost message and sent to the specified groups.

## Dependencies

This project uses the following dependencies:

- `newman`: A command-line collection runner for Postman.
- `newman-reporter-json-summary`: A Newman reporter that generates a summary report in JSON format.
- `newman-reporter-htmlextra`: A Newman reporter that generates a html report.

## Contributing

Contributions to this project are welcome. Please feel free to submit a pull request if you would like to contribute.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
