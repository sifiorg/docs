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
  culture: [
    {
      type: 'doc',
      id: 'culture/index',
    },
    {
      type: 'doc',
      id: 'culture/glossary',
    },
  ],
  sdk: [
    {
      type: 'doc',
      id: 'sdk/index',
    },
  ],
  api: [
    {
      type: 'doc',
      id: 'api/index',
    },
  ],
  contracts: [
    {
      type: 'doc',
      id: 'contracts/index',
    },
    {
      type: 'doc',
      id: 'contracts/addresses',
      label: 'Contract addresses',
    },
    {
      type: 'doc',
      id: 'contracts/conventions',
      label: 'Common fields',
    },
    {
      type: 'category',
      label: 'Facets',
      link: {
        type: 'doc',
        id: 'contracts/facets/index',
      },
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'contracts/facets/warp-link',
        },
        {
          type: 'doc',
          id: 'contracts/facets/stateless',
        },
        {
          type: 'category',
          label: 'Protocols',
          collapsible: false,
          link: {
            type: 'doc',
            id: 'contracts/facets/protocols/index',
          },
          items: [
            {
              type: 'doc',
              id: 'contracts/facets/protocols/curve',
            },
            {
              type: 'doc',
              id: 'contracts/facets/protocols/uniswap',
            },
            {
              type: 'doc',
              id: 'contracts/facets/protocols/stargate',
            },
          ],
        },
        {
          type: 'doc',
          id: 'contracts/facets/star-vault',
        },
      ],
    },
  ],
};
