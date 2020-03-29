/* eslint-disable no-irregular-whitespace */
const langCode = 'en';

const strings = {
  dashboard: 'Dashboard',
  privacyScreen: {
    title: 'Privacy notice 🕵🏽',
    statement: `More than any other personal information, I strongly believe that your health information should remain private.`,
    context: `The Wall Street Journal under-covered in 2018 that a series of health apps—including mood and pill trackers—were sharing information with platforms like Facebook and advertisement networks.`,
    localOnly: `All information shared with this app is encrypted and locally stored on your device.`,
    noCloud: `There is no cloud, so we're not moving your health information around.`,
    signature: `Damien\nDeveloper of ADDday`,
    cta: `Got it!`,
  },
  welcomeScreen: {
    title: 'Hey! 👋',
    greeting: `I'm Sam, nice to meet you!`,
    whoAmI: `I'm an ADHD companion application.\nMy purpose is to help you with your daily routine and medications, if you have any.`,
    ready: `Ready?\nThis small wizard will guide you through my configuration!`,
    cta: `Let's go!`,
  },
};

export default {
  [langCode]: strings,
};
