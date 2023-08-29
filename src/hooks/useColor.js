
function useColor(getColors) {
  const colorResult = (getColors.length === 0) ? <div>no colors available</div> : getColors;
  return [colorResult]
}

export default useColor 