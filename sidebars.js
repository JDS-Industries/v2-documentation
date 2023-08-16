/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // gitSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial',
        }
      ]
    }
  ],

  gitSidebar: [
    {
      type: 'category',
      label: 'Git',
      items: [
        {
          type: 'autogenerated',
          dirName: 'git',
        }
      ]
    }
  ],
};

module.exports = sidebars;

