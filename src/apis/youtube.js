import axios from 'axios';
import React from 'react';

const KEY = 'AIzaSyAwH0l_pePCa1TZW4bLNpHc2XtFRl5jCJE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})