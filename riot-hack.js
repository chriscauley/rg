/* Riot hack because I don't understand how to bundle stuff.
   This hack allows both `yarn docs` and `yarn build` (runs 3 tests) to work as is.
   The problem is that riot is importing multiple copies in the tests or parcel with
   the various other solutions I've tried.
*/

import riot from 'riot'

window.riot = riot