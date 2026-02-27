export async function GET() {
    const body = "google.com, pub-3779816940145698, DIRECT, f08c47fec0942fa0";

    return new Response(body, {
        status: 200,
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600", // 1 hora de caché (opcional)
        },
    });
}