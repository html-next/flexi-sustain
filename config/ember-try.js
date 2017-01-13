/*jshint node:true*/
/*
 1.12 and prior support may work, but is sadly untestable so long
 as liquid-fire is used for the docs. liquid-fire 0.19.x's
 template compiler cannot handle flexi.
 */
module.exports = {
  scenarios: [
    {
      name: 'ember-1.13.13',
      bower: {
        dependencies: {
          'ember': '~1.13.13'
        },
        resolutions: {
          'ember': '~1.13.13'
        }
      }
    },
    {
      name: 'ember-lts-2.4',
      bower: {
        dependencies: {
          'ember': 'components/ember#lts-2-4'
        },
        resolutions: {
          'ember': 'lts-2-4'
        }
      }
    },
    {
      name: 'ember-lts-2.8',
      bower: {
        dependencies: {
          'ember': 'components/ember#lts-2-8'
        },
        resolutions: {
          'ember': 'lts-2-8'
        }
      }
    },
    {
      name: 'ember-2.9',
      bower: {
        dependencies: {
          'ember': '~2.9'
        },
        resolutions: {
          'ember': '~2.9'
        }
      }
    },
  ]
};
