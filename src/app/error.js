'use client'

import { useEffect } from 'react'

import Button from '@/components/ui/Button/Button'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h1>Oops!</h1>
                <h4>Something went <span style={{ color: 'var(--color-pastel-orange)' }}>wrong</span></h4>
                <br />
                <br />
                <Button onClick={() => reset()}>Try again</Button>
            </div>
        </>
    )
}
