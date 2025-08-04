import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Network Threat Detection',
    Svg: require('@site/static/img/Logo-Suricata-vert-R.svg').default,
    description: (
      <>
          Suricata is an advanced, open-source engine that performs
          real-time intrusion detection, inline intrusion prevention,
          network security monitoring, and traffic logging. Built for
          performance and deep packet inspection.
      </>
    ),
  },
  {
    title: 'Master Web Application Security',
    Svg: require('@site/static/img/burp-suite.svg').default,
    description: (
      <>
          Burp Suite helps you focus on uncovering vulnerabilities while it automates the repetitive tasks.
          From crawling to scanning, Burp streamlines your entire testing workflow so you can focus on what
          matters — exploiting and reporting real security flaws.


      </>
    ),
  },
  {
    title: 'Powered by Open Security',
    Svg: require('@site/static/img/opnsense.svg').default,
    description: (
      <>
          OPNsense is built on hardened open-source technologies and
          delivers enterprise-grade firewall, VPN, and IDS/IPS capabilities — all managed through a responsive,
          web-based interface.
          Scalable, secure, and trusted by professionals worldwide.
      </>
    ),

  },
    {
        title: 'Master Web Application Security',
        Svg: require('@site/static/img/burp-suite.svg').default,
        description: (
            <>
                Burp Suite helps you focus on uncovering vulnerabilities while it automates the repetitive tasks.
                From crawling to scanning, Burp streamlines your entire testing workflow so you can focus on what
                matters — exploiting and reporting real security flaws.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
