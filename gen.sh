#!/bin/bash

# Look for .md files in the notes directory

# Use mapfile to read .md file paths into an array
md_files=($(find ./public/notes -type f -name "*.md"))

# Create an array of paths in JSON format
paths_json=$(printf '%s\n' "${md_files[@]}" | jq -R . | jq -s .)

# Remove old paths.json file if it exists
rm -f ./public/paths.json

# Write the JSON array to paths.json in the root directory
echo "$paths_json" > ./public/paths.json

echo "paths.json has been created with the list of .md file paths."