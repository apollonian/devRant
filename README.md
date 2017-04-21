<!--Thanks Meadowcottage for the README template -->
<img src="https://github.com/apollonian11/devRant/raw/master/assets/APP_ICON_LARGE.png" align="left" width="172px" height="172px"/>
<img align="left" width="0" height="172px" hspace="10"/>

# devRant on _Amazon Alexa_
> The Unofficial devRant Alexa Skill.</br>
Enjoy(and relate to) the community's top rants.

[![License](https://img.shields.io/badge/License-MIT-red.svg?style=flat-square)](https://github.com/apollonian11/devRant/blob/master/LICENSE.md)

</br>

## About

Built using the [Alexa Skills Kit SDK for Node.js](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs), this skill relies on [RekkyRek's](https://github.com/RekkyRek) [RantScript](https://github.com/RekkyRek/RantScript) API to fetch a random rant from the top 2K posts. If the rant contains an image, it is displayed via _Standard Home Card_ in the Amazon Alexa App.

## Interaction Model

#### Specified Intent
> **User**:</br>
Alexa, ask Dev Rant to tell me a rant

> **Alexa**:</br>
Here's your rant:</br>
void walks into a cave</br>
doesn't return ... by manrock007
   
#### Unspecified Intent
> **User**: Launch Dev Rant
  
> **Alexa**:  
Here's your rant:</br>
Nothing is more permanent than a temporary fix. ... by marps1

## Contribute

[<img width='45' height="45" align='left' alt='Github' src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg">](https://github.com/apollonian11/devRant) The current skill is very limited in terms of functionality. In future release(s), users should be able specify tags, ++ rants, post a rant or a comment, etc. Contributors/PRs are always encouraged.

[<img width='45' height="45" align='left' alt='Amazon Skills Kit' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Amazon_Alexa_App_Logo.png">](https://github.com/alexa/skill-sample-nodejs-fact) To begin with Alexa Skill developement [official docs](https://developer.amazon.com/alexa-skills-kit) is the best place to start. To create your first skill using the Alexa Skills Kit SDK refer [this](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/content/fact-skill-1). Also, make sure to check the [homepage](https://developer.amazon.com/alexa) out.
