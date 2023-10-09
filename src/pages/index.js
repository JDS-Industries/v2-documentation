import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const Body = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
  <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className="container">
      <p className="hero__title">{siteConfig.title}</p>
      <p className="hero__subtitle">{siteConfig.tagline}</p>
    </div>
  </header>
  )
}

const Content = () => {
  return (
    <Stack direction="row" spacing={5} justifyContent="center" sx={css.cards}>
      <Paper elevation={24} sx={css.paper}>          
        <Link href="#" style={css.links}>DOCS</Link>   
      </Paper>
      <Paper elevation={24} sx={css.paper}>          
        <Link href="https://github.com/JDS-Industries" style={css.links}>GIT</Link>   
      </Paper>
      <Paper elevation={24} sx={css.paper}>          
        <Link href="#" style={css.links}>BLOG</Link>   
      </Paper>
    </Stack>
  )
}

const Home = () => {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Body />
      </main>
      <Content />
    </Layout>
  )
}

export default Home

const css = {
  cards: {
    padding: '20px',
    backgroundColor: '#22222',
  },

  paper: {
    width: '15%',
    padding: '10px',
    minHeight: '200px',
    textAlign: 'center',
    backgroundColor: '#004d99',
    lineHeight: '200px',
    fontSize: '30px',
    borderRadius: '0px',
    color: '#ffffff',
    opacity: [0.9, 0.8, 0.7],
    '&:hover': {
      backgroundColor: '#0066cc',
      opacity: [0.9, 0.8, 0.7],
    }
  },

  links: {  
    textDecoration: 'none',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: 'yellow'
    }
  }
}

