import React from 'react';
import SearchForm from './search_form.js';
import LocationsList from './locations_list.js';
import Gmap from '../components/gmap.js';

const RouteSearch = () => {
  return (
    <div>
      <SearchForm />
      <LocationsList />
      <Gmap />
    </div>
  );
};

export default RouteSearch;
