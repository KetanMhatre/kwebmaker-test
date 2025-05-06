import axios from 'axios';

const ENDPOINT = 'https://astralpaints.kwebmakerdigitalagency.com/graphql';

export const fetchGraphQL = async (query) => {
  try {
    const res = await axios.post(
      ENDPOINT,
      { query },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return res.data.data;
  } catch (err) {
    console.error('Error:', err);
    return null;
  }
};
