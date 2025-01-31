// app/Authentication/withProtectedRoute.js
export function withProtectedRoute() {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("authToken");
        return Boolean(token); // Return true if token exists
    }
    return false;
}