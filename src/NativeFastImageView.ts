import type { TurboModule } from 'react-native'
import { TurboModuleRegistry } from 'react-native'

export enum Priority {
    Low = 'low',
    Normal = 'normal',
    High = 'high',
}

export enum CacheControl {
    Immutable = 'immutable',
    Web = 'web',
    CacheOnly = 'cacheOnly',
}

export interface Source {
    uri: string
    headers?: { [key: string]: string }
    priority?: Priority
    cache?: CacheControl
}

export interface Spec extends TurboModule {
    preload: (sources: Source[]) => void
    clearMemoryCache: () => Promise<void>
    clearDiskCache: () => Promise<void>
    getCachePath: (source: Source) => Promise<void>
}

export default TurboModuleRegistry.get<Spec>('FastImageView')
