import axios from 'axios';

const GRAPHQL_ENDPOINT =
  'https://astralpaints.kwebmakerdigitalagency.com/graphql';

export const fetchGraphQL = async (query) => {
  try {
    const res = await axios.post(
      GRAPHQL_ENDPOINT,
      { query },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return res.data.data;
  } catch (err) {
    console.error('GraphQL Error:', err);
    return null;
  }
};
