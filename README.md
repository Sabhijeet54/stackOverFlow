# Stack Overflow Mobile App

This is a simple mobile application built with React Native that allows you to browse the latest questions on Stack Overflow based on different topics (React, React Native, and Node.js).


## Features

- Splash screen for a smooth app start.
- Tab navigation for React, React Native, and Node.js topics.
- Display of the hottest questions for each topic.
- Infinite scrolling to load more questions.
- Opening questions in the phone's browser for more details.

## Requirements

Before you begin, ensure you have met the following requirements:

- Node.js installed.
- npm or Yarn package manager installed.
- React Native development environment set up.

## Installation

To set up the project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/abhijeet548/stackOverFlow
   cd stackOverFlow

   npm install
   # or
   yarn install

   npm start
   # or
   yarn start

   # For Android
   npm run android
   # For iOS
   npm run ios


Upon launching the app, you will see a splash screen for 2 seconds.
After that, you'll find tabs at the bottom for React, React Native, and Node.js topics.
Tap on a tab to view the hottest questions for that topic.
Scroll down to load more questions.
To view a question in your phone's browser, tap on a specific question.


   API Integration
   To customize the API integration or change the topics, you can modify the code in the QuestionsScreen.js file.


