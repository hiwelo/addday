import { mapping } from '@eva-design/eva';

const customThemeMapping = {
  strict: {
    'text-heading-1-font-size': 38,
    'text-heading-1-line-height': 57,
    'text-heading-1-font-weight': '800',

    'text-heading-2-font-size': 31,
    'text-heading-2-line-height': 47,
    'text-heading-2-font-weight': '800',

    'text-heading-3-font-size': 26,
    'text-heading-3-line-height': 39,
    'text-heading-3-font-weight': '800',

    'text-heading-4-font-size': 22,
    'text-heading-4-line-height': 33,
    'text-heading-4-font-weight': '800',

    'text-subtitle-1-font-size': 22,
    'text-subtitle-1-line-height': 33,
    'text-subtitle-1-font-weight': '600',

    'text-subtitle-2-font-size': 18,
    'text-subtitle-2-line-height': 27,
    'text-subtitle-2-font-weight': '600',

    'text-paragraph-1-font-size': 18,
    'text-paragraph-1-line-height': 27,
    'text-paragraph-1-font-weight': '400',

    'text-paragraph-2-font-size': 15,
    'text-paragraph-2-line-height': 23,
    'text-paragraph-2-font-weight': '400',

    'text-caption-1-font-size': 16,
    'text-caption-1-line-height': 24,
    'text-caption-1-font-weight': '700',

    'text-caption-2-font-size': 12,
    'text-caption-2-line-height': 18,
    'text-caption-2-font-weight': '700',

    'text-label-font-size': 16,
    'text-label-line-height': 24,
    'text-label-font-weight': '800',

    'border-radius': 8,
  },
  components: {
    Button: {
      appearances: {
        filled: {
          variantGroups: {
            size: {
              medium: {
                textFontSize: 18,
                textFontWeight: '400',
                textLineHeight: 27,
              },
            },
          },
        },
      },
    },
    // Toggle: {
    //   appearances: {
    //     default: {
    //       mapping: {
    //         textFontSize:
    //       }
    //     }
    //   }
    // }
  },
};

export { mapping };
export default customThemeMapping;
