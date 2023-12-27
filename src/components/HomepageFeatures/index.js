import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
{
    title: 'Paperless Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Powered by Docusaurus, Documentation can be accessed from anywhere. Contains docs related to managing server, setting up and managing projects, git workflow and more.
      </>
    ),
  },
  {
    title: 'Code from anywhere with ease',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        JDS manages a GitHub repository for all our projects.
      </>
    ),
  },
  {
    title: 'NextGen Technologies',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Powered by React and Next.js. We built high scalable applications for the company and maintain in-house applications used by teams within JDS.
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        {/* <ThemeProvider theme={darkTheme}>
          <Paper variant="elevation" elevation={0} sx={{ p: 2 }}>

          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          </Paper>
        </ThemeProvider> */}


          <ThemeProvider theme={darkTheme}>
            <Paper variant="elevation" elevation={0} sx={{ p: 2 }}>
              <Chip label="Hello Friend" color="primary" />
            </Paper>
          </ThemeProvider>
        </div>
      </div>
    </section>
  )
}
