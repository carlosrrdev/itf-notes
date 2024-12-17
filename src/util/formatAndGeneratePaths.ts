export interface Paths {
    id: string,
    formattedString: string,
    path: string
}

export function formatAndGeneratePaths(data: string[], extension: string = '.md'): Paths[] {
    return data.map((rawPath) => {
        const fileName = rawPath.split('/').pop()?.replace(extension, '') || '';
        return {
            id: crypto.randomUUID(),
            formattedString: formatString(fileName),
            path: fileName,
        };
    });
}

function formatString(str: string): string {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}