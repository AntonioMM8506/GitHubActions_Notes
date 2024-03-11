# GitHub Actions & Workflows Course

## Notes.txt
General notes about GitHub Actions and Workflows. Basic theory for a better understanding.

## 01_yaml_to_json
Practice to understand the equivalency between a YAML file and a JSON file.

To test it. Follow the next steps:
1. Locate in the 01_yaml-to-json path
2. Install all the node dependencies
```
npm install
```
3. Run the project
```
npm run start
```
4. Start editing the YAML file. Each time you save it, you will see the translation in the output.json file. 

## .github/Workflows
All the Workflows created with their respective comments for later reference.

__Notes.txt__ => File where you can find general notes about GitHub Actions.

__order_of_creation.text__ => File where you can find the order in which the files were being created. Take in consideration than many of them were updated depending of the topic and the context. So maybe some or them were created an altered later. Be sure to review the SHA for retrieving an earlier reference. 

## Important
Take in mind, that all the workflows have been configured to differently, some on them are configured to run on push, when a issue is created, when a pull request is created, with external events, or even manually. So be sure first to understand what does each workflow do before running it. 
