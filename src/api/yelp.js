import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer osDvPhoF4vBVIE4N2StgBrozAi8MvJ73a-LGb8MpCbl2w2S_xkiEt6AHJpMwZ9XrLNg_g_8EW2egtYIoFjMY_5DsqOQk4c0l1L6Bv8TvXELOBUlRKfOlibSv7ldvXXYx'
  }
});
