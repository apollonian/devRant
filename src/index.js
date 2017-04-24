const devRant = require('rantscript');
const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.a0212b5e-a5ed-4fee-833a-9aa6e6034bb0';
const SKILL_NAME = 'devRant';
const GET_RANT_MESSAGE = 'Here\'s your rant: ';
const HELP_MESSAGE = 'You can say tell me a rant, or, you can say exit ... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const UNHANDLED_MESSAGE = 'Sorry, I didn\'t get that. Try saying it again';
const UNHANDLED_REPROMPT = 'Try saying it again.';
const STOP_MESSAGE = 'Goodbye!';
const ERROR_MESSAGE = 'Oops, Error 418 ... Try again'

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
      .rants('top', 24, getRandomInt(4, 2048))
      .then((rants) => {
        let rant = rants[0];
        if (rant.attached_image != '') {
          rant = rants[rants.findIndex(rant => rant.attached_image == '')];
        }
        let randomRant = (rant.text + ' ... by ' + rant.user_username);
        let speechOutput = GET_RANT_MESSAGE + randomRant;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomRant);
      })
      .catch(function () {
        this.emit(':tell', ERROR_MESSAGE);
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
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};