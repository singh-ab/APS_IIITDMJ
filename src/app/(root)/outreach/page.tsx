import React from 'react';

const OutreachPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-900">Outreach</h1>
        <p className="text-xl text-teal-600 mt-4">
          Engaging with the community through various outreach activities and events.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-800 mb-4">Our Mission</h2>
        <p className="text-teal-700">
          Our outreach program aims to inspire and educate the community about astronomy and physics.
          We organize various events, workshops, and activities to engage people of all ages and backgrounds.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-800 mb-4">Upcoming Events</h2>
        <ul className="list-disc list-inside text-teal-700">
          <li className="mb-2">
            <strong>Star Gazing Night</strong> - Join us for a night under the stars with telescopes and expert guidance.
          </li>
          <li className="mb-2">
            <strong>Physics Workshop</strong> - Hands-on activities and experiments to explore the wonders of physics.
          </li>
          <li className="mb-2">
            <strong>Astronomy Lecture Series</strong> - A series of lectures by renowned astronomers and physicists.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-800 mb-4">Past Events</h2>
        <ul className="list-disc list-inside text-teal-700">
          <li className="mb-2">
            <strong>Science Fair</strong> - Showcasing innovative projects and experiments by students.
          </li>
          <li className="mb-2">
            <strong>Community Outreach</strong> - Engaging with local schools and communities to promote science education.
          </li>
          <li className="mb-2">
            <strong>Public Lectures</strong> - Informative and engaging lectures on various topics in astronomy and physics.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-800 mb-4">Get Involved</h2>
        <p className="text-teal-700">
          We welcome volunteers and participants for our outreach activities. If you are passionate about astronomy and physics
          and want to make a difference in the community, join us!
        </p>
        <p className="text-teal-700 mt-4">
          For more information, contact us at <a href="mailto:astronomy@iiitdmj.ac.in" className="text-teal-900 underline">astronomy@iiitdmj.ac.in</a>.
        </p>
      </section>
    </div>
  );
};

export default OutreachPage;