/* eslint-disable no-irregular-whitespace */
const langCode = 'en';

const strings = {
  auth: {
    headline: 'Welcome back,',
    headlineEnding: '!',
    contentHeadline: "We've got you covered.",
    contentStart: 'Everything you share with ADDday is ',
    contentBold: 'encrypted on your device ',
    contentEnd: 'to make sure you are the only person accessing it.',
  },
  dashboardScreen: {
    title: 'Hey there! 👋',
    subtitle: 'How are you today, {{firstName}}?',
  },
  days: {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    mon: 'Mon',
    tue: 'Tue',
    wed: 'Wed',
    thu: 'Thu',
    fri: 'Fri',
    sat: 'Sat',
    sun: 'Sun',
    weekdays: 'Weekdays',
    weekend: 'Weekend',
    everyday: 'Everyday',
  },
  crashDataAuthScreen: {
    title: 'Analytics 👩🏾‍⚕️',
    statement: `This application is tracker-free.`,
    helpMe: `If you want to help the development, and participate in a more secure and stable app, you can opt-in to share errors and crashes with the project.`,
    service: `To centralize all debug and errors, this app is using Sentry, a GDPR-compliant error-tracking software.`,
    informationShared: `If you decide to opt-in, only crashes, errors and some device information will be shared. No health and personal information are involved.`,
    toggle: `Share crashes and errors information with the project`,
    cta: `We're done, let's focus on you!`,
  },
  meds: {
    form: {
      editTitle: 'Edit {{name}}',
      newTitle: 'New Medication',
    },
    cta: 'Add Medication',
    medication: {
      alias: 'Alias (to use in sensible places like notifications)',
      aliasPlaceholder: '',
      dosage: 'Dosage',
      dosagePlaceholder: '5 mg',
      name: 'Name',
      namePlaceholder: 'Dextroamphetamine',
    },
    scheduledIntake: {
      title: 'Schedule Medications',
    },
    submit: 'Submit',
    title: 'Medication Alerts',
    view: {
      medicationSection: 'Information',
      intakeSection: 'Intake',
    },
  },
  privacyScreen: {
    title: 'Privacy notice 🕵🏽',
    statement: `More than any other personal information, I strongly believe that your health information should remain private.`,
    context: `The Wall Street Journal under-covered in 2018 that a series of health apps—including mood and pill trackers—were sharing information with platforms like Facebook and advertisement networks.`,
    localOnly: `All information shared with this app is encrypted and locally stored on your device.`,
    noCloud: `There is no cloud, so your health information is not moved around.`,
    signature: `Damien\nDeveloper of ADDday`,
    cta: `Let's keep this between us!`,
  },
  welcomeScreen: {
    title: `Hey! 👋`,
    greeting: `I'm Sam, nice to meet you!`,
    whoAmI: `I'm an ADHD companion application.\nMy purpose is to help you with your daily routine and medications, if you have any.`,
    ready: `Ready?\nThis small wizard will guide you through my configuration!`,
    cta: `Let's go!`,
  },
  wizardProfileScreen: {
    title: `Your profile 🧬`,
    fullNameLabel: `How should we call you?`,
    cta: `Configure the app`,
  },
};

export default {
  [langCode]: strings,
};
