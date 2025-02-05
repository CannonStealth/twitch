export function snakeCasify<T extends { [key: string]: string }>(object: T): T {
    return Object.fromEntries(
        Object.entries(object).map(([k, v]) => [
            k
                .split(/(?=[A-Z])/)
                .map((str) => str.toLowerCase())
                .join("_"),
            v,
        ])
    ) as T;
}
