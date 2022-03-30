# Zip2State
Zip2State is a function that uses an optimized zipcode library to automatically & reliably derive a US state from a zipcode, all for under 5k.

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