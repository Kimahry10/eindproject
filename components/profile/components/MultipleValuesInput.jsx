
import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import json from './data/tags.json';
import { Tags } from '../../../providers/Tags'


export const MultipleValuesInput = () => {

  const { selectedTags, setSelectedTags } = Tags();
  const [tags, setTags] = useState([]);
  const [filteredTags, setFilteredTags] = useState(null);

  useEffect(() => {
    setTags(json.data);
  }, []);

  const searchCountry = (event) => {
    setTimeout(() => {
      let _filteredCountries;
      if (!event.query.trim().length) {
        _filteredCountries = [...tags];
      }
      else {
        _filteredCountries = tags.filter((country) => {
          return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }

      setFilteredTags(_filteredCountries);
    }, 250);
  }

  return (
    <div className="card">
      <span className="p-fluid">
        <AutoComplete value={selectedTags} suggestions={filteredTags} completeMethod={searchCountry} field="name" multiple onChange={(e) => setSelectedTags(e.value)} aria-label="Countries" />
      </span>
    </div>
  )
}
