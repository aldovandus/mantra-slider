const getPositions = (
  event: React.MouseEvent<HTMLDivElement>,
  scaleRate: number = 0.5
) => {
  const x =
    event.currentTarget.clientWidth -
    (event.currentTarget.getBoundingClientRect().right - event.clientX);
  const y =
    event.currentTarget.clientHeight -
    (event.currentTarget.getBoundingClientRect().bottom - event.clientY);
  const xPos = -x + event.currentTarget.offsetWidth / 2;
  const yPos = -y + event.currentTarget.offsetHeight / 2;

  return { x: xPos * scaleRate, y: yPos * scaleRate };
};

export { getPositions };
