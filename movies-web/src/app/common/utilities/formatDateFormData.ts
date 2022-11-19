
export function formatDateFormData(date: Date) {
    date = new Date(date);
    const format = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const [
        { value: month }, , { value: day }, , { value: year }
    ] = format.formatToParts(date);

    // yyyy-MM-dd
    return `${year}-${month}-${day}`;
}
