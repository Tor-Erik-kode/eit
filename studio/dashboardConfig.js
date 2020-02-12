export default {
  widgets: [
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
                  buildHookId: '5e3d5b54d96201b0b1e332c6',
                  title: 'Sanity Studio',
                  name: 'eit-studio',
                  apiId: '542d8bde-7154-4bab-94e4-3d6ff2b38ff6'
                },
                {
                  buildHookId: '5e3d5b54b73a1cc874037889',
                  title: 'Eit',
                  name: 'eit-web',
                  apiId: '9ee90eb9-fab5-4b64-bbe2-05a437b38197'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/synnovsh/eit',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://eit-web.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
  ]
}
