export const useFormDuration = () =>{
  function formatDuration(totalSec: number) {
    const m = Math.floor(totalSec / 60)
    const s = totalSec % 60
    return `${m}:${String(s).padStart(2, '0')}`
  }
  return formatDuration
}