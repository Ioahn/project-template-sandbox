type MaybeNull<T> = T | null;
type MaybeString<T> = T | string;

type Optional<T> = {
    [Keys in keyof T]?: T[Keys] 
}

declare namespace DI {
    interface Factory<T> implements import("inversify").interfaces.Factory<T> {}
}

declare module "*.jpeg" {
    const value: any;
    export default value;
  }