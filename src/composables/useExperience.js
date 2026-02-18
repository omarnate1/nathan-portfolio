import { computed } from 'vue'

export function useExperience(startYear, startMonth) {
  const experience = computed(() => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1

    let years = currentYear - startYear
    let months = currentMonth - startMonth

    if (months < 0) {
      years--
      months += 12
    }

    return { years, months }
  })

  const displayText = computed(() => {
    const { years, months } = experience.value

    if (years === 0) {
      return `${months} Months Experience`
    }

    let text = `${years} Year${years !== 1 ? 's' : ''}`
    if (months > 0) {
      text += `, ${months} Month${months !== 1 ? 's' : ''}`
    }
    text += ' Experience'
    return text
  })

  return { experience, displayText }
}
