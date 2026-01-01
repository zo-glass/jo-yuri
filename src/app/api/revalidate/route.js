import { revalidateTag } from 'next/cache'

export async function POST(request) {
    const { searchParams } = new URL(request.url)
    const tag = searchParams.get('tag')
    const key = searchParams.get('key')

    if (key !== process.env.REVALIDATE_KEY) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 403 })
    }

    if (!tag) {
        return new Response(JSON.stringify({ message: 'Missing tag' }), { status: 400 });
    }

    revalidateTag(tag, 'max')

    return new Response(JSON.stringify({ message: `Tag '${tag}' revalidated` }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
}
