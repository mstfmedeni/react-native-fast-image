import type { TurboModule } from 'react-native'
import { TurboModuleRegistry } from 'react-native'

export interface Source {
    uri: string
    // FastImage için gerekli diğer özellikler
    headers?: { [key: string]: string }
    priority?: 'low' | 'normal' | 'high'
    cache?: 'immutable' | 'web' | 'cacheOnly'
}

export interface Spec extends TurboModule {
    preload: (sources: Source[]) => void
    clearMemoryCache: () => Promise<void>
    clearDiskCache: () => Promise<void>
    getCachePath: (source: Source) => Promise<void>
}

export default TurboModuleRegistry.get<Spec>('FastImageView')
