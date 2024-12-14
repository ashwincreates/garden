#!/usr/bin/env bash
echo "Running Prebuild Script🌼"
git submodule foreach git pull origin master
node searchIndex.mjs
# mkdir -p ./public/images
# find ./content -type f -name '*.png' -exec cp ./public/images {} +

# Target directory
TARGET_DIR="./public/images"

# Create the target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Find and copy all .png, .jpeg, and .jpg files
find . -type f \( -iname "*.png" -o -iname "*.jpeg" -o -iname "*.jpg" \) -exec cp {} "$TARGET_DIR" \;
