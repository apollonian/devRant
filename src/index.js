const devRant = require('rantscript');
const Alexa = require('alexa-sdk');

const APP_ID = undefined;
const SKILL_NAME = 'devRant';
const GET_RANT_MESSAGE = 'Here\'s your rant: ';
const HELP_MESSAGE = 'You can say tell me a rant, or, you can say exit ... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const UNHANDLED_MESSAGE = 'Sorry, I didn\'t get that. Try saying it again';
const UNHANDLED_REPROMPT = 'Try saying it again.';
const STOP_MESSAGE = 'Goodbye!';

let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const handlers = {
  'LaunchRequest': function () {
    this.emit('GetRant');
  },
  'GetNewRantIntent': function () {
    this.emit('GetRant');
  },
  'GetRant': function () {
    devRant
      .rants('top', 1, getRandomInt(8, 2048))
      .then((rants) => {
        rant = rants[0];
        let randomRant = (rant.text + ' ... by ' + rant.user_username);
        let speechOutput = GET_RANT_MESSAGE + randomRant;
        if (rant.attached_image == '') {
          this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomRant);
        } else {
          speechOutput += ' ... See the attached image.';
          let imageObj = {
            smallImageUrl: rant.attached_image.url,
            largeImageUrl: rant.attached_image.url
          };
          this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomRant, imageObj);
        }
      })
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', STOP_MESSAGE);
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', STOP_MESSAGE);
  },
  'SessionEndedRequest': function () {
    this.emit(':tell', STOP_MESSAGE);
  },
  'Unhandled': function () {
    const speechOutput = UNHANDLED_MESSAGE;
    const reprompt = UNHANDLED_REPROMPT;
    this.emit(':ask', speechOutput, reprompt);
  }
};

exports.handler = (event, context) => {
  const alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};