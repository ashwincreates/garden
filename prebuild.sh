#!/usr/bin/env bash
echo "Running Prebuild Script🌼"
mkdir ./public/images
find ./content -type f -name '*.png' -exec cp -t ./public/images {} +