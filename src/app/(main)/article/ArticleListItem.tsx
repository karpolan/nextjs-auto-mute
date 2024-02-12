import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Link } from '@/components';
import { articleToTitle, articleToUrl } from './utils';

interface Props extends HTMLAttributes<HTMLLIElement> {
  name: string;
}

/**
 * Renders Link to Article inside <li> tag
 * @component ArticleListItem
 */
const ArticleListItem: FunctionComponent<Props> = ({ name, ...restOfProps }) => {
  return (
    <li {...restOfProps}>
      <Link href={articleToUrl(name)}>{articleToTitle(name)}</Link>
    </li>
  );
};

export default ArticleListItem;
