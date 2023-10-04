const endpoint = 'https://gist.githubusercontent.com/kinlane/c10819f59d0ecd87b6eed4ff691ce7f8/raw/4f6127d162c5d0b0b0f60b03a2b68ee66cdfc489/cities.json';

const cities = [];

fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));

console.log(cities)