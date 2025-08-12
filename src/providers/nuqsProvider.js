import { NuqsAdapter } from 'nuqs/adapters/react'

export function NuqsProvider({ children }) {
    return (
        <NuqsAdapter>
            {children}
        </NuqsAdapter>
    )
}
