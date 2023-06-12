import React, { type SVGProps } from 'react';

const SVGFileMock = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, reference) => (
  // eslint-disable-next-line react/jsx-props-no-spreading -- The props are typed as SVGProps, so we can spread them.
  <svg ref={reference} {...props} />
));

SVGFileMock.displayName = 'SVGFileMock';

export const ReactComponent = SVGFileMock;
export default SVGFileMock;
