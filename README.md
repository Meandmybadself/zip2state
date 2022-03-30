# Zip2State
Zip2State is a function that uses an [optimized zip code library](https://github.com/Meandmybadself/zip2state/blob/main/data/zip-state.txt) to automatically & reliably derive a US state from a zip code, all for under 3k.

![Animation of text input](/zip2state.gif)

*Demo:* https://meandmybadself.github.io/zip2state/

## Why?
If we can reliably determine a user's state from their zip code, why have them enter both?

Current client-side solutions involve:
* Loading all zipcodes & city/states (big file size)
* Interacting with an API (not great for client-only solutions)

## How?
Reduce entire ranges of a state's zipcodes (eg `94000-94999`) into their base root (`94`) where possible.

## Assumptions

* Zip codes don't move between states
* New zip codes are added using existing numeric prefixes

## Installation
`npm i zip2state`

## Usage
Function accepts a string (could be a partial zipcode).
Returns a two-letter US state code or '' if no state was found.

```
import zip2state from 'zip2state'

const partialZip = zip2state('94')
console.log(partialZip) // 'CA'

const fullZip = zip2state('44446')
console.log(fullZip) // 'OH'

const fakeState = zip2state('00000')
console.log(fakeState) // ''
```

## Data Attribution
Uses `Coven, D. S., (2012). Free Zipcode Database: Unique Zipcode [data file]. Retrieved from http://federalgovernmentzipcodes.us`