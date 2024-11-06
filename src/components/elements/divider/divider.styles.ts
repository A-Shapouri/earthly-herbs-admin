export const COLOR = (shade, color) => {
  if (shade === 'light') {
    return `border-t-${color}-100`;
  }
  if (shade === 'medium') {
    return `border-t-${color}-300`;
  }
  if (shade === 'dark') {
    return `border-t-${color}-500`;
  }
  // 'primary': 'border-t-primary-100',
  // 'danger': 'border-t-danger-100',
  // 'info': 'border-t-info-100',
  // 'control': 'border-t-control-100',
  // 'success': 'border-t-success-100',
  // 'warning': 'border-t-warning-100',
  // 'tertiary': 'border-t-tertiary-100',
  // 'secondary': 'border-t-secondary-100',
  // 'inherit': 'border-t-inherit',
  // 'slate': 'border-t-slate-100',
  // 'zinc': 'border-t-zinc-100',
  // 'neutral': 'border-t-neutral-100',
  // 'stone': 'border-t-stone-100',
  // 'red': 'border-t-red-100',
  // 'orange': 'border-t-orange-100',
  // 'amber': 'border-t-amber-100',
  // 'yellow': 'border-t-yellow-100',
  // 'lime': 'border-t-lime-100',
  // 'green': 'border-t-green-100',
  // 'emerald': 'border-t-emerald-100',
  // 'teal': 'border-t-teal-100',
  // 'cyan': 'border-t-cyan-100',
  // 'sky': 'border-t-sky-100',
  // 'blue': 'border-t-blue-100',
  // 'indigo': 'border-t-indigo-100',
  // 'violet': 'border-t-violet-100',
  // 'purple': 'border-t-purple-100',
  // 'fuchsia': 'border-t-fuchsia-100',
  // 'pink': 'border-t-pink-100',
  // 'rose': 'border-t-rose-100',
};

export const TYPE = {
  'solid': 'border-solid',
  'dashed': 'border-dashed',
  'dotted': 'border-dotted',
};
