const pageElements = [
    {

      htmlElementName: 'div',
      innerHTML: [
        {

            htmlElementName: 'i',
            innerHTML: 'Hello World!',

            style: {
              border: '1px solid black',
              backgroundColor: '#edeff2',
              color: '#4d4d4d',
            },
          }
      ],

      style: {
        border: '1px solid blue',
        padding: '10px',
        backgroundColor: '#edeff2',
        color: '#4d4d4d',
      },
    },
    
    {

      htmlElementName: 'div',
      innerHTML: [{

        htmlElementName: 'div',
        innerHTML: [
          {
  
              htmlElementName: 'h2',
              innerHTML: 'Hello World!-- inner inner 1',
  
              style: {
                border: '1px solid green',
                backgroundColor: '#edeff2',
                color: '#4d4d4d',
                padding: '17px',
              },
            }
        ],
  
        style: {
          border: '1px solid red',
          padding: '10px',
          backgroundColor: '#edeff2',
          color: '#4d4d4d',
        },
      },
      {
  
        htmlElementName: 'p',
        innerHTML: 'Hello World!-- inner 1',

        style: {
          border: '1px solid pink',
          backgroundColor: '#edeff2',
          color: '#4d4d4d',
        },
      }
    ],

      style: {
        border: '7px solid blue',
        backgroundColor: '#edeff2',
        color: '#4d4d4d',
        padding : "18px",
      },
    },
  ];

export {pageElements};  