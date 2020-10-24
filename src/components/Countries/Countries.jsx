import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./Countries.module.css";
import { fetchCountries } from "../../api";

const Countries = ({ handleCountryChange }) => {
  const [fetchedCountries, setfetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setfetchedCountries(await fetchCountries());
    };

    fetchApi();
  }, [setfetchedCountries]);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Countries;
