"use client";
const MustardOilPage = () => {
  const sections = [
    {
      title: 'Rich in Natural Nutrients',
      description: 'Mustard oil is packed with essential nutrients that promote heart health and improve digestion.',
      image: '/dis.png', 
      reverse: false,
    },
    {
      title: 'Traditional and Authentic',
      description: 'Our mustard oil is extracted using traditional methods to preserve its natural aroma and flavor.',
      image: '/dis.png', 
      reverse: true,
    },
    {
      title: 'Versatile in Cooking',
      description: 'Perfect for frying, sautéing, and even as a salad dressing, mustard oil adds a unique taste to your dishes.',
      image: '/dis.png', 
      reverse: false,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col sm:flex-row ${
            section.reverse ? 'sm:flex-row-reverse' : ''
          } items-center sm:items-start mb-12`}
        >
          {/* Text Section */}
          <div className="sm:w-1/2 p-5">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p className="text-gray-700">{section.description}</p>
          </div>

          {/* Image Section */}
          <div className="sm:w-1/2 p-5">
            <img
              src={section.image}
              alt={section.title}
              className={`w-full h-auto ${
                section.reverse
                  ? 'rounded-tr-full rounded-br-full'
                  : 'rounded-tl-full rounded-bl-full'
              } shadow-lg`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MustardOilPage;