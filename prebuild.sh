#!/usr/bin/env bash
echo "Running Prebuild Script🌼"
git submodule foreach git pull origin master
mkdir ./public/images
find ./content -type f -name '*.png' -exec cp -t ./public/images {} +