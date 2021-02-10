# **2STools library** 
## Library with useful functions for our clients

## Install

> npm install 2stools-daq

---

## Examples

> Using *packetDecode* function to decode raw data to JSON.
```js
const { packetDecode } = require('2stools-daq');

const rawData = '000441da6666';
const decodedData = packetDecode(rawData);

console.log(decodedData);
// { "temp": "27.3000" }
```
---

## Author
> [2Solve Engenharia e Tecnologia](http://www.2solve.com/)