# Project Overview

In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and I was left with an application with an incomplete test suite. I completed the missing tests and added one of my own (for a future feature.)

## Installation

Just clone the project to your local drive, then open index.html.

## Usage

Click the hamburger menu icon to see a list of feeds. Click on a RSS feed to load the entries for that feed. Click on an entry to read it.

## Future Features

In addition to the required tests, I added a test for one future feature: images. The test examines each .entry to make sure it has an img tag. Since I did not write the logic to implement the images feature, this test will fail.