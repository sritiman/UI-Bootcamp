import React from 'react'

export default function PageElement({htmlElementName='div', style = {}, children="demochildren"}) {

    const construct = (htmlElementName, innerHTML, style)=> {
        const Tag = `${htmlElementName}`;
        return <Tag style={style}>{innerHTML}</Tag>
    }

  return construct(htmlElementName, children, style);
}
