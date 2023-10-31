import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

function FeatureCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link to={link} className={styles['cards-container']}>
      <div className={styles['card']}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const features = [
    {
      title: 'What is Sifi',
      description: 'Learn what Sifi is and why you should be using it.',
      link: '/culture/overview',
    },
    {
      title: 'Integrate the SDK',
      description: 'The Sifi SDK is the easiest way to integrate Sifi swaps.',
      link: '/sdk/overview',
    },
    {
      title: 'REST API',
      description: 'Learn how to use the Sifi REST API.',
      link: '/api/overview',
    },
    {
      title: 'Sifi smart contracts',
      description:
        'Learn how to interact directly with the Sifi smart contracts.',
      link: '/contracts/overview',
    },
  ];

  return (
    <Layout>
      <div className="landing-container">
        <header className={styles.header}>
          <h1>Sifi Documentation</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col col--2"></div>
            {features.slice(0, 2).map((feature) => (
              <div className="col col--4" key={feature.title}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col col--2"></div>
            {features.slice(2, 4).map((feature) => (
              <div className="col col--4" key={feature.title}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
