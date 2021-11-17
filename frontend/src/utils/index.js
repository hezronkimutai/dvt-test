import React from 'react';

import axios from 'axios';

export const url = 'https://shrouded-hamlet-74185.herokuapp.com/';

export const AppContext = React.createContext({});

export const fetchData = (search, setData) => {
    setData({});
    axios.post(url, { searchTerm: search }).then(res => {
        setData(res.data);
    });
}
