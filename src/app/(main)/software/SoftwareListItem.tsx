import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Link } from '@/components';
import { softwareToTitle, softwareToUrl } from './utils';

interface Props extends HTMLAttributes<HTMLLIElement> {
  name: string;
}

/**
 * Renders Link to Software inside <li> tag
 * @component SoftwareListItem
 */
const SoftwareListItem: FunctionComponent<Props> = ({ name, ...restOfProps }) => {
  return (
    <li {...restOfProps}>
      <Link href={softwareToUrl(name)}>{softwareToTitle(name)}</Link>
    </li>
  );
};

export default SoftwareListItem;
