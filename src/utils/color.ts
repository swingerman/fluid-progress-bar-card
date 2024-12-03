export function rgbaToString(color: number[], alpha: number): string {
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
}

export function parseCssColor(colorToParse: string | number[]): number[] | undefined {
  if (typeof colorToParse !== 'string') {
    return colorToParse;
  }

  const div = document.createElement('div');
  document.body.appendChild(div);
  div.style.color = colorToParse;
  const res = getComputedStyle(div)
    .color.match(/[\.\d]+/g)
    ?.map(Number);
  div.remove();
  return res;
}
