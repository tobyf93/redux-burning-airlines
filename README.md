# Overview

Booking system for airline services. Users are able to view/book seats through a SPA and watch them become unavailable in real-time. Planes and flights are created using a Ruby on Rails CRUD.

## Installation

```
git clone https://github.com/suzan2go/react-rails-redux-sample.git
cd react-rails-redux-sample
bundle install
npm install
rake db:migrate
```

## Technical Stuff
* Live updates using AJAX long-polling (every second) to a Rails API
* SPA created using React.js and Redux
