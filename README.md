# Demo

![](assets/joke-teller.gif)

This project is an extension of javascript20-projects :Joke Teller from [ZTM courses](https://academy.zerotomastery.io/p/javascript-projects)

# JokeRobotApp

![](assets/Joke-Teller-Flowchart.png)

This is a simple training app based on HTML, CSS, JS and 2 APIs - [Joke API](https://sv443.net/jokeapi/v2/) and [Voice RSS Text-To-Speech API](http://www.voicerss.org/api/).

- Upon clicking on a button GET request is sent to the [Joke API](https://sv443.net/jokeapi/v2/) resulting in a received JSON object with a joke string.
- Joke is sent via the POST request to the [Voice RSS Text-To-Speech API](http://www.voicerss.org/api/).
- A response is received as an audio and inserted into the audio HTML element which is hidden.
- Finally the robot is telling user a joke.
