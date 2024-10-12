import React from 'react';
import { MediaProps } from "./media.props";
import classNames from "@utils/helpers/class-names";
import { STYLES } from "./media.style";

export const Media = (props: MediaProps) => {
  const { children, style, at, greaterThan, lessThan, between, className } = props;

  return (
    <div style={style} className={classNames(
      STYLES({ at: at, greaterThan: greaterThan, lessThan: lessThan, between: between }),
      className,
    )}>{children}</div>
  );
}

export default Media;
