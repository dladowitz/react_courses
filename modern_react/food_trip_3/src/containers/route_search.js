import React from 'react';
import SearchForm from './search_form.js';
import LocationsList from './locations_list.js';

const RouteSearch = () => {
  return (
    <div>
      <SearchForm />
      <LocationsList />
    </div>
  );
};

export default RouteSearch;
