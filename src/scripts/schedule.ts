export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('ru-RU', { weekday: 'short', month: 'long', day: 'numeric' })
    .format(new Date(dateString))
    .replaceAll(',', '\n')
}

export function useSchedule(selector: string): void {
  console.log({ selector });
}
