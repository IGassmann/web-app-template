import React, { SVGProps } from 'react';

const SVGFileMock = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, reference) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg ref={reference} {...props} />
));

SVGFileMock.displayName = 'SVGFileMock';

export const ReactComponent = SVGFileMock;
export default SVGFileMock;
