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

## Important
Take in mind, that all the workflows have been configured to run on Push, so, every single time you commit a change, to any file, and then push these changes into your remote repository, all the workflows will be triggered. 