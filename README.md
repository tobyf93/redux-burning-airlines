# Overview

Booking system for airline services. Users are able to view/book seats through a SPA and watch them become unavailable in real-time. Planes and flights are created using a Ruby on Rails CRUD.

## Installation

```
// Get code
git clone https://github.com/tobyf93/redux-burning-airlines.git
cd redux-burning-airlines

// Install dependencies
bundle install
npm install

// Build database
rake db:migrate
```

## Technical Stuff
* Live updates using AJAX long-polling (every second) to a Rails API
* SPA created using React.js and Redux
