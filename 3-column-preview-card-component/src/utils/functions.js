export const setBg = (target) => {
  if (target === 'sedans') {
    return 'bg-[#E28625]'
  }
  if (target === 'suvs') {
    return 'bg-[#006971]'
  }
  if (target === 'luxury') {
    return 'bg-[#004140]'
  }
}

export const setColor = (target) => {
  if (target === 'sedans') {
    return 'text-[#E28625]'
  }
  if (target === 'suvs') {
    return 'text-[#006971]'
  }
  if (target === 'luxury') {
    return 'text-[#004140]'
  }
}
