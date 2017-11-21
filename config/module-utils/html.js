/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 22:00$
 *@desc
 */
import React from 'react';

const initScriptTemplate = () => `EPMUIApp.csr();`;

const Html = ( children ) => {

  return(
    <html lang="zh-cn">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <link href="STYLESHEET_SOURCE_PLACEHOLDER" rel="stylesheet" />
      <title>{ 'TITLE_SOURCE_PLACEHOLDER' }</title>
    </head>
    <body>
    <div id="react-root" dangerouslySetInnerHTML={ { __html: children.children } } />
    <script src="JAVASCRIPT_SOURCE_PLACEHOLDER" />
    <script dangerouslySetInnerHTML={ { __html: initScriptTemplate() } } />
    </body>
    </html>
  )
};

export { Html };
export default Html;