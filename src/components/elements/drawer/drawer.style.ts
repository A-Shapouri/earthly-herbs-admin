const Anchor = {
  start: {
    enterAnimation: 'translate-x-0',
    exitAnimation: 'translate-x-full',
    childrenLocation: 'flex-row',
    childrenSize: 'w-80 max-w-[90%] h-screen',
  },
  end: {
    enterAnimation: '-translate-x-0',
    exitAnimation: '-translate-x-full',
    childrenLocation: 'flex-row-reverse',
    childrenSize: 'w-80 max-w-[90%] h-screen',
  },
  top: {
    enterAnimation: '-translate-y-0',
    exitAnimation: '-translate-y-full',
    childrenLocation: 'flex-col-reverse',
    childrenSize: 'h-80 max-h-[90%] w-screen',
  },
  bottom: {
    enterAnimation: 'translate-y-0',
    exitAnimation: 'translate-y-full',
    childrenLocation: 'flex-col',
    childrenSize: 'h-80 max-h-[90%] w-screen',
  },
};

export default Anchor;
