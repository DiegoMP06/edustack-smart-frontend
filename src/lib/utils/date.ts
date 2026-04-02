export const formatDate = (dateStr: string) => {
    return new Intl.DateTimeFormat("es-MX", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(dateStr));
};
