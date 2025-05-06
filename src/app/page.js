import { fetchGraphQL } from '../../lib/graphql';
import { HOMEPAGE_QUERY } from '../../lib/queries';

export default async function HomePage() {
  let homepage = null;
  try {
    const data = await fetchGraphQL(HOMEPAGE_QUERY);
    homepage = data?.pages?.nodes?.[0]?.homepage;
  } catch (error) {
    console.error('error : ', error);
    return <h1>Failed to load data</h1>;
  }
  console.log(homepage);

  if (!homepage) return <h1>No homepage data found</h1>;

  return (
    <div className='font-sans'>
      {homepage.banners?.[0]?.bannerImage?.node?.sourceUrl && (
        <section className='relative w-full overflow-hidden mb-12'>
          <img
            src={homepage.banners[0].bannerImage.node.sourceUrl}
            alt={homepage.banners[0].bannersTitle}
            className='w-full h-auto max-h-[700px] object-cover'
          />
          <div className='absolute inset-0 bg-black/60 flex flex-col justify-center text-center p-6 md:p-16 text-white'>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 shadow-md tracking-tight leading-tight'>
              {homepage.banners[0].bannersTitle}
            </h2>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl shadow-md max-w-4xl mx-auto'>
              {homepage.banners[0].bannerDescription}
            </p>
          </div>
        </section>
      )}

      <section className='text-center mb-16 px-4'>
        <h3 className='text-4xl md:text-5xl font-bold text-gray-800 mb-2'>
          {homepage.blogSubtitle}
        </h3>
        <p className='text-2xl md:text-3xl text-gray-600 font-medium'>
          {homepage.blogTitle}
        </p>
      </section>

      <section className='px-4 mb-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
          {homepage.categories.map((cat, index) => (
            <div
              key={index}
              className='group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transform transition duration-300 hover:-translate-y-1'
            >
              <div className='overflow-hidden'>
                <img
                  src={cat.image.node.sourceUrl}
                  alt={cat.title}
                  className='w-full h-[250px] object-cover transform transition-transform duration-300 group-hover:scale-105'
                />
              </div>
              <div className='p-6 flex flex-col items-center text-center'>
                <h2 className='text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors'>
                  {cat.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='flex flex-col lg:flex-row items-center bg-gray-50 p-6 md:p-12 mb-16 gap-8'>
        <img
          src={homepage.homeAboutVideoImage?.node?.sourceUrl}
          alt='About Astral Paints'
          className='w-full lg:w-1/2 rounded-2xl shadow-md object-cover'
        />
        <div className='lg:w-1/2 space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
            {homepage.homeAboutTitle}
          </h2>
          <h3 className='text-xl text-blue-600 font-semibold'>
            {homepage.homeAboutSubtitle}
          </h3>
          <div
            className='text-gray-700 text-base leading-relaxed'
            dangerouslySetInnerHTML={{ __html: homepage.homeAboutDescription }}
          />
          <a
            href={homepage.homeAboutButton?.url}
            target={homepage.homeAboutButton?.target}
            className='inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition'
          >
            {homepage.homeAboutButton?.title}
          </a>
        </div>
      </section>

      <section className='text-center py-12 px-4 bg-white mb-16'>
        <h3 className='text-3xl font-bold text-gray-800 mb-2'>
          {homepage.homeServicesSubtitle}
        </h3>
        <p className='text-2xl text-gray-600'>{homepage.homeServicesTitle}</p>
      </section>

      <section className='bg-gradient-to-br from-blue-50 to-white py-12 px-4 text-center mb-16'>
        <h3 className='text-3xl md:text-4xl font-bold text-blue-800 mb-2'>
          {homepage.homeColoursSubtitle}
        </h3>
        <p className='text-xl md:text-2xl text-gray-700 mb-6'>
          {homepage.homeColoursTitle}
        </p>
        <a
          href={homepage.homeColoursButton?.url}
          target={homepage.homeColoursButton?.target}
          className='inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition'
        >
          {homepage.homeColoursButton?.title}
        </a>
      </section>

      <section className='relative mb-16'>
        <img
          src={homepage.homeJoinBackgroundImage?.node?.sourceUrl}
          alt='Become A Dealer'
          className='w-full h-[400px] object-cover rounded-lg'
        />
        <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white p-6 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-2'>
            {homepage.homeJoinTitle}
          </h2>
          <h3 className='text-xl md:text-2xl mb-4'>
            {homepage.homeJoinSubtitle}
          </h3>
          <div
            className='text-base md:text-lg mb-4'
            dangerouslySetInnerHTML={{ __html: homepage.homeJoinDescription }}
          />
          <a
            href={homepage.homeJoinButton?.url}
            target={homepage.homeJoinButton?.target}
            className='inline-block px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition'
          >
            {homepage.homeJoinButton?.title}
          </a>
        </div>
      </section>
    </div>
  );
}
