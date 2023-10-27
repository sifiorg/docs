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
module.exports = {
  principles: [
    {
      type: 'doc',
      id: 'principles/overview',
    },
    {
      type: 'doc',
      id: 'principles/glossary',
    },
  ],
  sdk: [
    {
      type: 'doc',
      id: 'sdk/overview',
    },
  ],
  api: [
    {
      type: 'doc',
      id: 'api/overview',
    },
  ],
  contracts: [
    {
      type: 'doc',
      id: 'contracts/overview',
    },
    {
      type: 'doc',
      id: 'contracts/warp-link',
    },
    {
      type: 'category',
      label: 'Protocols',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'contracts/protocols',
        },
      ],
    },
  ],
};