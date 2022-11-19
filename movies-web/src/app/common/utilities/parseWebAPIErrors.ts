
export function parseWebAPIErrors(response: any): string[] {
    const result: string[] = [];

    if (response.error) {
        if (typeof response.error === 'string') {
            result.push(response.error);
        } else {
            const mapErrors = response.error.errors;
            const entries = Object.entries(mapErrors);
            entries.forEach((arr: any[]) => {
                const field = arr[0];
                arr[1].forEach((errorMessage: any) => {
                    result.push(`${field}: ${errorMessage}`);
                });
            });
        }
    }

    return result;
}
