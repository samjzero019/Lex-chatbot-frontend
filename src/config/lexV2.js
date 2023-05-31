import { Amplify } from "aws-amplify";
import { AWSLexV2Provider, Interactions } from "@aws-amplify/interactions";

const provider = new AWSLexV2Provider();
Interactions.addPluggable(provider);

// Amplify.addPluggable(new AWSLexV2Provider());

const interactionsConfig = {
  Auth: {
    identityPoolId: "us-east-2:a2b8fba3-d99c-4384-91dc-7bb8368cf2cc",
    region: "us-east-2",
  },
  Interactions: {
    bots: {
      // LexV2 Bot
      BookApointment: {
        name: "BookApointment",
        aliasId: "TSTALIASID",
        botId: "3IDVSJCRY9",
        localeId: "en_US",
        region: "ap-southeast-2",
        providerName: "AWSLexV2Provider",
      },
    },
  },
};

Amplify.configure(interactionsConfig);
