const stripMotionProps = (props) => {
  const allowed = ['children', 'className', 'style'];
  const cleanProps = {};

  for (const key in props) {
    if (allowed.includes(key)) {
      cleanProps[key] = props[key];
    }
  }
  return cleanProps;
};

module.exports = {
  h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  p: ({ children, ...props }) => <p {...props}>{children}</p>,
  div: (props) => <div {...stripMotionProps(props)} />,
}
