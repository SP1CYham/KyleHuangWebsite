// Minimal type shim for the `howler` package
declare module 'howler' {
  export const Howler: {
    /** mute/unmute every sound managed by howler.js globally */
    mute(muted: boolean): void;
    volume(volume?: number): number;
    stop(): void;
    ctx: AudioContext;
    usingWebAudio: boolean;
    noAudio: boolean;
  };

  export class Howl {
    constructor(options: Record<string, unknown>);
    play(spriteOrId?: string | number): number;
    pause(id?: number): this;
    stop(id?: number): this;
    mute(muted: boolean, id?: number): this;
    volume(volume?: number, id?: number): number | this;
    seek(seek?: number, id?: number): number | this;
    duration(id?: number): number;
    playing(id?: number): boolean;
    unload(): void;
    on(event: string, callback: (...args: unknown[]) => void, id?: number): this;
  }
}
