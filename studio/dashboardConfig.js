export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e187b280dabc0b8c287415',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-site-studio',
                  apiId: 'b1884bfe-3c49-4b9e-9098-9a0326f61ef1'
                },
                {
                  buildHookId: '61e187b26a0e260df333d3ce',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-site',
                  apiId: 'b3a8a060-53d6-414b-9ad0-f822738e1975'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/louise-becker/sanity-gatsby-portfolio-site',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-site.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
